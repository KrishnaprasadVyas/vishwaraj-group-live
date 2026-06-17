"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Award, Factory } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Defect Rate", value: "<0.01%", icon: CheckCircle2 },
  { label: "Global Clients", value: "500+", icon: Factory },
  { label: "Years Experience", value: "25+", icon: Award },
  { label: "ISO Certified", value: "9001", icon: Shield },
];

export function QualityCertifications() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 sm:py-20">
      {/* Abstract Background Overlay */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/hero_factory.png"
          alt="Factory Texture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
      </div>

      <div className="container-shell relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="caption-text mb-4 text-accent"
            >
              Enterprise Standards
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-xl text-white mb-6"
            >
              Zero Compromise on Quality.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="body-large text-white/70 mb-12"
            >
              Our manufacturing facilities adhere to the strictest global standards.
              From raw material intake to final extrusion, every millimeter of foam is
              inspected for cellular integrity, thermal resistance, and load-bearing capacity.
            </motion.p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex flex-col gap-2 border-l border-white/20 pl-6"
                >
                  <stat.icon className="h-6 w-6 text-accent mb-2" />
                  <span className="display-l text-white !text-4xl">{stat.value}</span>
                  <span className="caption-text text-white/50">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Certification Badge / Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square w-full max-w-md mx-auto rounded-[3rem] glass-panel-dark p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-50" />

              <Shield className="h-24 w-24 text-accent mb-8 relative z-10" />
              <h3 className="heading-l text-white mb-4 relative z-10">ISO 9001:2015</h3>
              <p className="body-base text-white/70 relative z-10">
                Certified Quality Management System ensuring consistent product quality
                and regulatory compliance across all manufacturing lines.
              </p>

              {/* Spinning decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-white/5 border-t-accent/30 pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
