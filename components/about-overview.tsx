"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Package, Settings, Wrench, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function AboutOverview() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl">
        {/* Top: Two Column Layout */}
        <div className="grid gap-16 lg:grid-cols-[0.55fr_0.45fr] items-center mb-20">
          <div>
            <Reveal>
              <div className="text-xs font-semibold tracking-[0.25em] text-accent uppercase font-mono mb-4">
                About Vishwaraj Polychem
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl mb-6 leading-tight">
                Engineering High-Performance Packaging Since 1999.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-6 text-lg leading-relaxed text-secondary mb-10">
                <p>
                  Operating from our state-of-the-art Pune MIDC manufacturing facility, Vishwaraj Polychem is a premier manufacturer of advanced protective packaging systems. We don't just sell foam—we engineer tailored transit solutions.
                </p>
                <p>
                  Our comprehensive expertise spans EPE foam, PU foam, Air Bubble films, and specialized industrial chemicals. Through a strict engineering-first approach and a commitment to quality manufacturing, we have built long-term relationships with leading brands across India.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-3 bg-accent text-white font-bold text-sm tracking-[0.15em] px-8 py-4 transition-all duration-300 rounded-full uppercase premium-shadow hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5"
              >
                Learn More About Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/epe_11.png"
                alt="Vishwaraj Polychem Manufacturing Production"
                fill
                className="object-cover hover:scale-105 transition-transform duration-[10s]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-white uppercase font-mono">
                    Live Production • Pune Facility
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom: Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Calendar, title: "Established 1999", desc: "Over two decades of proven manufacturing excellence." },
            { icon: MapPin, title: "Pune Manufacturing Facility", desc: "Advanced production facility located in the MIDC industrial hub." },
            { icon: Settings, title: "Engineering Excellence", desc: "Molecular-level precision and custom die-cut fabrications." },
            { icon: Wrench, title: "Custom Packaging Solutions", desc: "Bespoke packaging engineered to exact transit tolerances." }
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="group h-full flex flex-col gap-4 rounded-[1.5rem] border border-border bg-[#F8F9FA] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(249,115,22,0.35)] hover:shadow-[0_18px_40px_rgba(17,24,39,0.05)] hover:bg-white">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-border group-hover:bg-accent/10 group-hover:border-accent/20 transition-colors">
                  <item.icon className="w-5 h-5 text-secondary group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
