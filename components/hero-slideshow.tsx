"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/hero_factory.png",
    category: "Global Manufacturing Operations • Pune",
    title: ["PRECISION", "ENGINEERED."],
    description: "We design and manufacture premium protective packaging systems—delivering molecular-level precision and unmatched thermal resistance for the world's most demanding industrial supply chains.",
    ctaPrimary: { text: "Explore Capabilities", href: "/about" },
    ctaSecondary: { text: "Schedule Consultation", href: "/contact" }
  },
  {
    image: "/images/epe-sheet-stack.png",
    category: "High-Capacity Extrusion Lines",
    title: ["EPE FOAM", "SYSTEMS."],
    description: "High-performance expanded polyethylene sheets, rolls, and customized die-cut profiles manufactured to extreme transit tolerances.",
    ctaPrimary: { text: "View EPE Profiles", href: "/products" },
    ctaSecondary: { text: "Request Foam Specs", href: "/contact" }
  },
  {
    image: "/images/bubble-wrap-texture.png",
    category: "Multi-Layer Air Bubble film",
    title: ["AIR BUBBLE", "PACKAGING."],
    description: "Advanced multi-layer barrier bubble films providing continuous cushioning protection and superior puncture resistance.",
    ctaPrimary: { text: "Discover Barrier Films", href: "/products" },
    ctaSecondary: { text: "Order Sample Rolls", href: "/contact" }
  },
  {
    image: "/images/bubble-reflective-texture.png",
    category: "Custom Conversion Facilities",
    title: ["CROSS-LINKED", "FOAM."],
    description: "Specialized XLPE and polyurethane fabrications custom engineered for delicate instrumentation and heavy-duty industrial damping.",
    ctaPrimary: { text: "Explore XLPE Solutions", href: "/products" },
    ctaSecondary: { text: "Discuss Custom Fabrication", href: "/contact" }
  },
  {
    image: "/images/warehouse_logistics.png",
    category: "Talawade Industrial Hub",
    title: ["ENTERPRISE", "LOGISTICS."],
    description: "Strategic production and warehousing infrastructure ensuring stable, just-in-time delivery cycles across India.",
    ctaPrimary: { text: "Tour Our Infrastructure", href: "/about" },
    ctaSecondary: { text: "Partner With Us", href: "/contact" }
  }
];

const bgVariants = {
  initial: { opacity: 0, scale: 1.08, x: 50 },
  animate: {
    opacity: 1,
    scale: 1.25,
    x: -50,
    transition: {
      opacity: { duration: 0.45, ease: "easeInOut" as const },
      scale: { duration: 3.5, ease: "linear" as const },
      x: { duration: 3.5, ease: "linear" as const }
    }
  },
  exit: {
    opacity: 0,
    scale: 1.30,
    x: -80,
    transition: {
      opacity: { duration: 0.45, ease: "easeInOut" as const },
      scale: { duration: 0.45, ease: "linear" as const },
      x: { duration: 0.45, ease: "linear" as const }
    }
  }
};

const contentVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
      ease: "easeInOut" as const
    }
  }
};

const badgeVariants = {
  initial: { opacity: 0, x: -30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }
  },
  exit: { opacity: 0, x: -15, transition: { duration: 0.15 } }
};

const titleVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }
  },
  exit: { opacity: 0, y: -15, transition: { duration: 0.15 } }
};

const descVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.15 } }
};

const ctaVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }
  },
  exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15 } }
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
      }, 2000);
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
            style={{ willChange: "transform, opacity" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].image}
              alt="Advanced manufacturing facility"
              fill
              className="object-cover"
              style={{ filter: "brightness(1.18)" }}
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
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="container-shell relative z-10 flex flex-col justify-center min-h-[75vh] w-full max-w-7xl mx-auto"
      >
        <AnimatePresence mode="wait" initial={true}>
          <motion.div
            key={current}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ willChange: "transform, opacity" }}
            className="w-full pointer-events-auto"
          >
            {/* Eyebrow Badge */}
            <motion.div
              variants={badgeVariants}
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
              variants={titleVariants}
              className="display-xl text-white mb-8 font-black tracking-tight leading-[1.05]"
            >
              {slides[current].title[0]}<br />{slides[current].title[1]}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={descVariants}
              className="body-large text-zinc-300 md:w-3/5 lg:w-1/2 mb-12 min-h-[84px]"
            >
              {slides[current].description}
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              variants={ctaVariants}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link
                href={slides[current].ctaPrimary.href}
                className="group inline-flex items-center justify-center gap-3 bg-accent text-white font-bold text-sm tracking-[0.15em] px-10 py-5 transition-all duration-300 rounded-full uppercase premium-shadow magnetic-hover hover:bg-white hover:text-primary"
              >
                {slides[current].ctaPrimary.text}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={slides[current].ctaSecondary.href}
                className="inline-flex items-center justify-center gap-3 bg-white text-primary font-bold text-sm tracking-[0.15em] px-10 py-5 transition-all duration-300 rounded-full uppercase premium-shadow magnetic-hover hover:bg-accent hover:text-white"
              >
                {slides[current].ctaSecondary.text}
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls Container */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="absolute bottom-10 right-6 lg:right-12 z-20 flex items-center gap-5 pointer-events-auto"
      >
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
