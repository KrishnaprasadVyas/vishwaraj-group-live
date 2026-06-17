"use client";

import { Reveal } from "@/components/reveal";
import { Globe, Settings, Layers, ShieldCheck, Package, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";

export function WhyChooseUs({ preview = false }: { preview?: boolean }) {
  const allFeatures = [
    { icon: Globe, title: "25+ Years Experience", desc: "Over two decades of proven experience in the protective packaging industry since 1999." },
    { icon: Settings, title: "Engineering Excellence", desc: "Rigorous manufacturing processes to engineer flexible yet sturdy foam structures." },
    { icon: Layers, title: "Advanced Infrastructure", desc: "State-of-the-art technological tools to develop a precise range of foam composites." },
    { icon: ShieldCheck, title: "Quality Manufacturing", desc: "Sourcing superior polymers and applying precision die-cutting techniques for absolute consistency." },
    { icon: Package, title: "Custom Solutions", desc: "Renowned as premium die-cut fabricators catering to bespoke client and transit requirements." },
    { icon: Truck, title: "Reliable Delivery", desc: "Integrated marketing and rapid distribution network across the entire region." },
  ];

  const previewFeatures = [
    allFeatures[1], // Engineering Excellence
    allFeatures[3], // Quality Manufacturing
    allFeatures[4], // Custom Solutions
    allFeatures[5], // Reliable Delivery
  ];

  const displayFeatures = preview ? previewFeatures : allFeatures;

  return (
    <section className="py-16 px-6 lg:px-12 bg-[#F8F9FA] border-y border-border">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary">
              Why Choose Vishwaraj?
            </h2>
          </div>
        </Reveal>
        
        <div className={`grid sm:grid-cols-2 ${preview ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}>
          {displayFeatures.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.1}>
              <div className="group h-full flex flex-col gap-4 rounded-[1.5rem] border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(249,115,22,0.35)] hover:shadow-[0_18px_40px_rgba(17,24,39,0.05)]">
                <feature.icon className="w-8 h-8 text-accent" />
                <h3 className="text-lg font-bold text-primary">{feature.title}</h3>
                <p className="text-sm text-secondary">{feature.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {preview && (
          <Reveal delay={0.4}>
            <div className="mt-12 flex justify-center">
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-3 bg-white border border-border text-primary font-bold text-sm tracking-[0.15em] px-8 py-4 transition-all duration-300 rounded-full uppercase hover:border-[rgba(249,115,22,0.35)] hover:shadow-lg hover:text-accent"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
