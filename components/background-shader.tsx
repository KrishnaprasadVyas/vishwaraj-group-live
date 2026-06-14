"use client";

import { useEffect, useRef } from "react";

export function BackgroundShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rawGl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!rawGl) return;
    const gl = rawGl as WebGLRenderingContext;

    let animationFrameId: number;
    let resizeObserver: ResizeObserver | null = null;

    function syncSize() {
      if (!canvas) return;
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    syncSize();

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;

      void main() {
        vec2 uv = v_texCoord;
        
        // Subtle moving noise
        float noise = sin(uv.x * 10.0 + u_time * 0.3) * cos(uv.y * 10.0 + u_time * 0.2);
        noise += sin(uv.x * 20.0 - u_time * 0.2) * cos(uv.y * 15.0 + u_time * 0.4) * 0.5;
        
        // Light industrial grey palette (#F8F9FA to #F3F4F6)
        vec3 color1 = vec3(0.97, 0.98, 0.98); 
        vec3 color2 = vec3(0.95, 0.96, 0.96); 
        
        vec3 finalColor = mix(color1, color2, noise * 0.08 + 0.04);
        
        // Very subtle orange highlight shimmer (#F97316)
        float shimmer = pow(max(0.0, sin(uv.x * 3.0 + uv.y * 3.0 + u_time * 0.8)), 80.0);
        finalColor += vec3(0.97, 0.45, 0.08) * shimmer * 0.015; 
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    function compileShader(glContext: WebGLRenderingContext, type: number, src: string) {
      const s = glContext.createShader(type);
      if (!s) return null;
      glContext.shaderSource(s, src);
      glContext.compileShader(s);
      if (!glContext.getShaderParameter(s, glContext.COMPILE_STATUS)) {
        console.error(glContext.getShaderInfoLog(s));
        return null;
      }
      return s;
    }

    const prog = gl.createProgram();
    const compiledVs = compileShader(gl, gl.VERTEX_SHADER, vs);
    const compiledFs = compileShader(gl, gl.FRAGMENT_SHADER, fs);
    if (!prog || !compiledVs || !compiledFs) return;

    gl.attachShader(prog, compiledVs);
    gl.attachShader(prog, compiledFs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");

    function render(t: number) {
      if (!gl || !canvas) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full pointer-events-none opacity-60"
      style={{ display: "block" }}
    />
  );
}
