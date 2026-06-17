"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, Layers, Maximize, ShieldCheck } from "lucide-react";
import { productGroups, getProductImage } from "@/lib/content";

export function ProductExplorer() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const activeGroup = productGroups[activeGroupIndex];

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20">
      {/* Background Engineering Elements */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="absolute left-0 top-1/4 h-px w-full bg-primary" />
        <div className="absolute left-1/3 top-0 w-px h-full bg-primary" />
        <div className="absolute right-1/4 top-0 w-px h-full bg-primary" />
      </div>

      <div className="container-shell relative z-10">
        <div className="mb-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="caption-text mb-4 text-accent"
            >
              Material Sciences
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-xl text-primary"
            >
              Engineered Protection.
              <br />
              <span className="text-secondary">Molecular Precision.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <ShieldCheck className="h-5 w-5 text-accent" />
              ISO 9001:2015 Certified
            </div>
          </motion.div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          {/* Navigation / Categories - Sticky Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-28 flex flex-col gap-2">
              {productGroups.map((group, index) => {
                const isActive = activeGroupIndex === index;
                return (
                  <button
                    key={group.slug}
                    onClick={() => setActiveGroupIndex(index)}
                    className={`group relative flex w-full items-center justify-between rounded-2xl p-4 text-left transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-white premium-shadow"
                        : "bg-transparent text-secondary hover:bg-concrete"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`caption-text ${isActive ? "text-accent" : "text-primary/50"}`}>
                        0{index + 1}
                      </span>
                      <span className={`font-bold ${isActive ? "text-white" : "text-primary"}`}>
                        {group.name}
                      </span>
                    </span>
                    <ChevronRight
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isActive ? "text-accent translate-x-1" : "text-primary/30 group-hover:translate-x-1"
                      }`}
                    />

                    {/* Active Indicator Line */}
                    {isActive && (
                      <motion.div
                        layoutId="activeCategory"
                        className="absolute -left-4 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-accent"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product Showcase */}
          <div className="lg:col-span-8 xl:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGroup.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-[2rem] bg-graphite"
              >
                {/* Main Product Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[21/9]">
                  <Image
                    src={getProductImage(activeGroup.products[0]?.slug ?? "", activeGroup.slug)}
                    alt={activeGroup.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(min-width: 1024px) 75vw, 100vw"
                    priority
                  />

                  {/* Cinematic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,21,41,0.4)_100%)]" />

                  {/* Engineering UI Overlay (Static/Decorative) */}
                  <div className="absolute right-6 top-6 flex flex-col items-end gap-2 text-white/50 font-mono text-[10px]">
                    <div className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-accent animate-pulse" />
                      SYS.ACTIVE
                    </div>
                    <div>DATA.VOL: {(activeGroupIndex * 0.1415 + 0.8603).toFixed(4)}</div>
                    <div>SPEC.TOL: ±0.01mm</div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
                    <div className="max-w-2xl">
                      <h3 className="display-l text-white mb-4">
                        {activeGroup.name}
                      </h3>
                      <p className="body-large text-white/80 mb-8 max-w-xl">
                        {activeGroup.products[0]?.description ??
                          "Advanced protective packaging engineered for extreme durability and molecular precision."}
                      </p>

                      <div className="flex flex-wrap items-center gap-4">
                        <Link
                          href={`/products#${activeGroup.slug}`}
                          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-accent magnetic-hover"
                        >
                          Explore Range
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <div className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 backdrop-blur-md border border-white/10 text-white text-sm font-semibold">
                          <Layers className="h-4 w-4 text-accent" />
                          {activeGroup.products.length} Specifications Available
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-products grid below the main hero image */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5 border-t border-white/10">
                  {activeGroup.products.slice(0, 4).map((product, i) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      className="group/item relative flex flex-col justify-between p-6 bg-primary/40 hover:bg-white/10 transition-colors h-32"
                    >
                      <span className="caption-text text-accent block mb-2 opacity-50 group-hover/item:opacity-100 transition-opacity">
                        0{i + 1}
                      </span>
                      <span className="text-sm font-bold text-white line-clamp-2">
                        {product.name}
                      </span>
                      <Maximize className="absolute top-6 right-6 h-4 w-4 text-white/20 group-hover/item:text-white transition-colors" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
