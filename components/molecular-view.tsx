"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function MolecularView() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Directional highlight orange spotlight
    const spotLight = new THREE.SpotLight(0xf97316, 3);
    spotLight.position.set(5, 5, 5);
    scene.add(spotLight);

    // Blue fill light for industrial depth
    const blueLight = new THREE.PointLight(0x00a2f4, 1.5, 10);
    blueLight.position.set(-5, -2, 2);
    scene.add(blueLight);

    // Closed-cell foam block (transparent mesh)
    const group = new THREE.Group();

    const mainBoxGeom = new THREE.BoxGeometry(3.2, 2.2, 1.2);
    const material = new THREE.MeshPhongMaterial({
      color: 0xf3f4f6,
      transparent: true,
      opacity: 0.25,
      shininess: 90,
      specular: 0xffffff,
    });

    const mainBlock = new THREE.Mesh(mainBoxGeom, material);
    group.add(mainBlock);

    // Exploded orange wireframe
    const edges = new THREE.EdgesGeometry(mainBoxGeom);
    const wireframe = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: 0xf97316, transparent: true, opacity: 0.4 })
    );
    wireframe.scale.set(1.08, 1.08, 1.08);
    group.add(wireframe);

    // Sphere meshes representing EPE cells
    const cellMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.85,
      shininess: 100,
      specular: 0xf97316,
    });

    const cellCount = 28;
    const spheres: THREE.Mesh[] = [];

    for (let i = 0; i < cellCount; i++) {
      const sphereGeom = new THREE.SphereGeometry(0.18, 12, 12);
      const sphere = new THREE.Mesh(sphereGeom, cellMaterial);
      
      // Randomize inside box bounds
      sphere.position.set(
        (Math.random() - 0.5) * 2.8,
        (Math.random() - 0.5) * 1.8,
        (Math.random() - 0.5) * 0.8
      );
      
      group.add(sphere);
      spheres.push(sphere);
    }

    scene.add(group);
    camera.position.z = 4.5;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Rotate group slowly
      group.rotation.y += 0.003;
      
      // Responsive mouse tracking
      group.rotation.x += (mouseY * 0.4 - group.rotation.x) * 0.05;
      group.rotation.y += (mouseX * 0.4 - group.rotation.y) * 0.05;

      // Subtle pulse on spheres
      const time = Date.now() * 0.001;
      spheres.forEach((sphere, idx) => {
        const scaleVal = 1 + Math.sin(time + idx) * 0.08;
        sphere.scale.set(scaleVal, scaleVal, scaleVal);
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full min-h-[350px] lg:min-h-[500px]" />;
}
