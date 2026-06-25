"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/images/banner1.jpg",
    alt: "Vishwaraj Polychem Talawade MIDC Plant Facility"
  },
  {
    src: "/images/banner2.jpg",
    alt: "Advanced EPE Foam Production Line"
  },
  {
    src: "/images/banner3.jpg",
    alt: "Multi-Layer Air Bubble Film Manufacturing"
  },
  {
    src: "/images/banner4.jpg",
    alt: "Enterprise Logistics and Protective Packaging Warehouse"
  },
  {
    src: "/images/banner5.jpg",
    alt: "High-Capacity Extrusion Lines and Conversion Infrastructure"
  }
];

export function HeroBackgroundSlideshow() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const handleDotClick = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      handleNext();
    }, 5500);
  }, [handleNext]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current, resetTimer]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Background Images with Crossfade and Ken Burns Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1.08 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 5.5, ease: "linear" }
            }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Cinematic Overlays */}
      {/* 1. Base dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 2. Left-to-right gradient to ensure text readability on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001529]/95 via-[#001529]/75 to-transparent z-10" />

      {/* 3. Bottom-up gradient for section blending and scroll indicator contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#001529] via-transparent to-transparent z-10" />

      {/* 4. Engineering grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-10" />

      {/* Controls Container */}
      <div className="absolute bottom-10 right-6 lg:right-12 z-20 flex items-center gap-5 pointer-events-auto">
        {/* Active Slide Indicator / Fraction */}
        <div className="flex items-center gap-1.5 font-mono text-sm tracking-wider">
          <span className="text-white font-semibold">{String(current + 1).padStart(2, "0")}</span>
          <span className="text-white/30">/</span>
          <span className="text-white/40">{String(slides.length).padStart(2, "0")}</span>
        </div>

        {/* Vertical divider */}
        <div className="h-5 w-[1px] bg-white/10" />

        {/* Pagination Dots */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === index ? "w-6 bg-accent" : "w-1.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Vertical divider */}
        <div className="h-5 w-[1px] bg-white/10" />

        {/* Navigation Arrows */}
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white transition hover:bg-accent hover:border-accent hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white transition hover:bg-accent hover:border-accent hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
