"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/banner1.jpg",
    category: "Global Manufacturing Operations • Pune",
    title: ["PRECISION", "ENGINEERED."],
    description: "We design and manufacture premium protective packaging systems—delivering molecular-level precision and unmatched thermal resistance for the world's most demanding industrial supply chains."
  },
  {
    image: "/images/banner2.jpg",
    category: "High-Capacity Extrusion Lines",
    title: ["EPE FOAM", "SYSTEMS."],
    description: "High-performance expanded polyethylene sheets, rolls, and customized die-cut profiles manufactured to extreme transit tolerances."
  },
  {
    image: "/images/banner3.jpg",
    category: "Multi-Layer Air Bubble film",
    title: ["AIR BUBBLE", "PACKAGING."],
    description: "Advanced multi-layer barrier bubble films providing continuous cushioning protection and superior puncture resistance."
  },
  {
    image: "/images/banner4.jpg",
    category: "Custom Conversion Facilities",
    title: ["CROSS-LINKED", "FOAM."],
    description: "Specialized XLPE and polyurethane fabrications custom engineered for delicate instrumentation and heavy-duty industrial damping."
  },
  {
    image: "/images/banner5.jpg",
    category: "Talawade Industrial Hub",
    title: ["ENTERPRISE", "LOGISTICS."],
    description: "Strategic production and warehousing infrastructure ensuring stable, just-in-time delivery cycles across India."
  }
];

const bgVariants = {
  initial: { opacity: 0, scale: 1.02 },
  animate: {
    opacity: 1,
    scale: 1.08,
    transition: {
      opacity: { duration: 1.2, ease: "easeInOut" as const },
      scale: { duration: 6, ease: "linear" as const }
    }
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    transition: {
      opacity: { duration: 0.8, ease: "easeInOut" as const },
      scale: { duration: 0.8 }
    }
  }
};

const contentVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1 as const
    }
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
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
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 5500);
    }
  }, [isHovered, handleNext]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current, isHovered, resetTimer]);

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden pt-32 px-6 lg:px-12 bg-primary select-none"
    >
      {/* Background Images with Crossfade & Ken Burns */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={current}
            variants={bgVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              src={slides[current].image}
              alt="Advanced manufacturing facility"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001529]/95 via-[#001529]/75 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001529] via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-10" />
      </div>

      {/* Main Slide Content */}
      <div className="container-shell relative z-10 flex flex-col justify-center min-h-[75vh] w-full max-w-7xl mx-auto">
        <AnimatePresence mode="wait" initial={true}>
          <motion.div
            key={current}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full pointer-events-auto"
          >
            {/* Eyebrow Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2.5 shadow-sm mb-10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="caption-text text-white">{slides[current].category}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="display-xl text-white mb-8"
            >
              {slides[current].title[0]}<br />
              <span className="text-white/40">{slides[current].title[1]}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="body-large text-zinc-300 md:w-3/5 lg:w-1/2 mb-12 min-h-[84px]"
            >
              {slides[current].description}
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-3 bg-accent text-white font-bold text-sm tracking-[0.15em] px-10 py-5 transition-all duration-300 rounded-full uppercase premium-shadow magnetic-hover hover:bg-white hover:text-primary"
              >
                Explore Solutions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary font-bold text-sm tracking-[0.15em] px-10 py-5 transition-all duration-300 rounded-full uppercase premium-shadow magnetic-hover hover:bg-accent hover:text-white"
              >
                Request Consultation
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

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
              className={`h-1.5 rounded-full transition-all duration-300 ${current === index ? "w-6 bg-accent" : "w-1.5 bg-white/30 hover:bg-white/60"
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-30 pointer-events-none">
        <span className="caption-text text-white">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-white/30 overflow-hidden">
          <div className="w-full h-1/2 bg-white animate-[scrollDown_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
