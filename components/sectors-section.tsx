"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

type Sector = {
  industry: string;
  slug: string;
  image: string;
  description: string;
};

const sectors: Sector[] = [
  {
    industry: "AUTOMOTIVE",
    slug: "automotive-industry",
    image: "/images/banner2.jpg",
    description: "Protective foam for spare parts, bumpers, and precision components.",
  },
  {
    industry: "ELECTRONICS",
    slug: "electronics-industry",
    image: "/images/banner3.jpg",
    description: "Anti-static and shock-dampening solutions for PCBs and displays.",
  },
  {
    industry: "PHARMACEUTICAL",
    slug: "pharmaceutical-industry",
    image: "/images/banner4.jpg",
    description: "Temperature-resistant and clean-room compliant barrier packaging.",
  },
  {
    industry: "INDUSTRIAL",
    slug: "industrial-industry",
    image: "/images/banner5.jpg",
    description: "Heavy-duty foam and bubble lamination for logistics and OEM supply chains.",
  },
];

export function SectorsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const activeImage = hoveredIndex !== null ? sectors[hoveredIndex].image : null;

  return (
    <section className="relative overflow-hidden border-y border-border">
      {/* Dynamic photographic backdrop */}
      <div className="absolute inset-0 -z-10">
        {sectors.map((sector, i) => (
          <div
            key={sector.slug}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: activeImage === sector.image ? 1 : 0 }}
          >
            <Image
              src={sector.image}
              alt={sector.industry}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-[#0A192F]/90 backdrop-blur-sm" />
          </div>
        ))}
        {/* Default backdrop when no hover */}
        <div
          className="absolute inset-0 bg-[#0A192F] transition-opacity duration-700"
          style={{ opacity: activeImage ? 0 : 1 }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Header */}
        <Reveal>
          <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="text-[11px] font-bold tracking-[0.3em] text-accent uppercase font-mono mb-3">
                Sectors Served
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[0.95] font-heading">
                Global<br />
                <span className="opacity-30">Reach.</span>
              </h2>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase hover:text-white transition-colors self-start sm:self-end"
            >
              All Industries
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        {/* Vertical sector list */}
        <div className="flex flex-col">
          {sectors.map((sector, index) => (
            <div
              key={sector.slug}
              className="relative border-b border-border/60 last:border-0"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link
                href={`/industries#${sector.slug}`}
                className="group flex items-center justify-between py-5 sm:py-7 gap-4"
              >
                <div className="flex items-center gap-8">
                  <span className="text-[10px] font-bold text-zinc-500 font-mono w-5 shrink-0">
                    0{index + 1}
                  </span>
                  <span
                    className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none uppercase transition-all duration-500 ease-out font-heading"
                    style={{
                      color:
                        hoveredIndex === index
                          ? "white"
                          : "rgba(255,255,255,0.15)",
                      paddingLeft: hoveredIndex === index ? "2rem" : "0",
                      transform: hoveredIndex === index ? "scale(1.02)" : "scale(1)",
                    }}
                  >
                    {sector.industry}
                  </span>
                </div>

                <div
                  className="flex items-center gap-4 transition-all duration-500"
                  style={{ opacity: hoveredIndex === index ? 1 : 0 }}
                >
                  <span className="hidden sm:block text-sm text-zinc-300 max-w-xs text-right leading-6 font-light">
                    {sector.description}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-[0_12px_24px_rgba(224,90,0,0.3)] shrink-0 transition-transform duration-300 hover:scale-110">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
