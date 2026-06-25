"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const slides = [
  {
    image: "/images/banner1.jpg",
    category: "Global Manufacturing Operations • Pune",
    title: ["PRECISION", "ENGINEERED."],
    description: "We design and manufacture premium protective packaging systems—delivering molecular-level precision and unmatched thermal resistance for the world's most demanding industrial supply chains."
  },
  {
    image: "/images/banner2.jpg",
    category: "Advanced EPE Foam Production",
    title: ["EPE FOAM", "PACKAGING."],
    description: "High-durability, shock-absorbing EPE foam sheets, rolls, tubes, and custom die-cut inserts designed for maximum safety."
  },
  {
    image: "/images/banner3.jpg",
    category: "Multi-Layer Air Bubble Film",
    title: ["AIR BUBBLE", "SYSTEMS."],
    description: "Multi-layer protective air bubble bags and sheets, including anti-static wraps and laminations with aluminum or kraft paper."
  },
  {
    image: "/images/banner4.jpg",
    category: "Enterprise Logistics Protection",
    title: ["LOGISTICS", "PROTECTION."],
    description: "Heavy-duty protective packaging engineered to safeguard electronics, automotive parts, and industrial equipment during transit."
  },
  {
    image: "/images/banner5.jpg",
    category: "Infrastructure & Scalability",
    title: ["INFRASTRUCTURE", "CAPACITY."],
    description: "Equipped with state-of-the-art extrusion lines and advanced conversion tools in Pune to handle bulk enterprise orders."
  }
];

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current]);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  // Variants for slide animation (fade + slide transition)
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.6 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    })
  };

  const activeSlide = slides[current];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden pt-32 px-6 lg:px-12 bg-primary">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={activeSlide.image}
              alt="Advanced manufacturing facility"
              fill
              className="object-cover mix-blend-overlay"
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary/95"></div>

        {/* Engineering grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container-shell relative z-10 flex flex-col justify-center min-h-[75vh] w-full max-w-7xl mx-auto">
        <AnimatePresence mode="wait" initial={true}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2.5 shadow-sm mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="caption-text text-white">{activeSlide.category}</span>
            </div>

            {/* Title */}
            <h1 className="display-xl text-white mb-8">
              {activeSlide.title[0]}<br />
              <span className="text-white/40">{activeSlide.title[1]}</span>
            </h1>

            {/* Description */}
            <p className="body-large text-zinc-300 md:w-3/5 lg:w-1/2 mb-12 min-h-[84px]">
              {activeSlide.description}
            </p>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row gap-6">
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
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute right-6 bottom-10 lg:right-12 z-20 flex gap-4">
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white transition hover:bg-accent hover:border-accent hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white transition hover:bg-accent hover:border-accent hover:scale-105 active:scale-95"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-12 left-6 lg:left-12 z-20 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === index ? "w-8 bg-accent" : "w-2.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-30 z-10 pointer-events-none">
        <span className="caption-text text-white">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-white/30 overflow-hidden">
          <div className="w-full h-1/2 bg-white animate-[scrollDown_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
