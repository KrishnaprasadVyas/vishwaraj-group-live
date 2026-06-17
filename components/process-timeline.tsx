"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Settings, Droplets, PackageCheck, Truck } from "lucide-react";

const processes = [
  {
    id: "01",
    title: "Raw Material Processing",
    description: "High-grade polymers and industrial chemicals are rigorously tested and prepared for extrusion. We maintain a zero-tolerance policy for impurities.",
    icon: Droplets,
  },
  {
    id: "02",
    title: "Precision Extrusion",
    description: "State-of-the-art European machinery extrudes foam structures with molecular-level precision, ensuring consistent density and cell structure.",
    icon: Settings,
  },
  {
    id: "03",
    title: "Quality Assurance",
    description: "Every batch undergoes stress testing, thermal resistance checks, and dimensional verification to meet international automotive and aerospace standards.",
    icon: PackageCheck,
  },
  {
    id: "04",
    title: "Global Distribution",
    description: "Optimized logistics networks ensure just-in-time delivery for OEMs and enterprise clients across 40+ countries.",
    icon: Truck,
  },
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section className="bg-white pt-16 sm:pt-20 pb-8 sm:pb-12 border-t border-concrete" ref={containerRef}>
      <div className="container-shell">
        <div className="mb-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="caption-text mb-4 text-accent"
          >
            Engineering Workflow
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-xl text-primary"
          >
            The Manufacturing Process
          </motion.h2>
        </div>

        <div className="relative mx-auto w-full mt-10 lg:mt-16">
          {/* Horizontal Line Background */}
          <div className="absolute top-0 left-0 right-0 h-px bg-concrete" />

          {/* Animated Horizontal Line */}
          <motion.div
            style={{ width: lineWidth }}
            className="absolute top-0 left-0 h-px bg-accent origin-left"
          />

          <div className="flex gap-6 overflow-x-auto pt-10 pb-12 snap-x snap-mandatory no-scrollbar lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
            {processes.map((process, index) => {
              return (
                <div
                  key={process.id}
                  className="relative flex flex-col snap-start shrink-0 w-[85vw] sm:w-[320px] lg:w-auto h-full"
                >
                  {/* Timeline Node */}
                  <div className="absolute top-[-3.5rem] left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-accent shadow-lg z-10">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>

                  {/* Content Area */}
                  <div className="w-full h-full flex-1">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, type: "spring", delay: index * 0.1 }}
                      className="glass-panel p-8 rounded-[2rem] hover-lift group relative overflow-hidden h-full flex flex-col"
                    >
                      {/* Decorative Background Icon */}
                      <process.icon className="absolute -bottom-8 -right-8 h-40 w-40 text-concrete opacity-50 transition-transform duration-500 group-hover:scale-110" />

                      <div className="relative z-10 flex-1">
                        <div className="mb-4 flex items-center gap-4">
                          <span className="caption-text text-accent">Phase {process.id}</span>
                        </div>
                        <h3 className="heading-m text-primary mb-3">{process.title}</h3>
                        <p className="body-base text-secondary">{process.description}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
