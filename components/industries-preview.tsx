"use client";

import { Reveal } from "@/components/reveal";
import { Car, Cpu, Pill, Monitor, Server, Zap as Power, Factory, Box, ArrowRight } from "lucide-react";
import Link from "next/link";

const industries = [
  { name: "Automotive", icon: Car, desc: "Specialized foam dunnage & protective padding for sensitive components." },
  { name: "Electronics", icon: Cpu, desc: "Anti-static bubble bags & electrostatic discharge (ESD) safe packaging." },
  { name: "Pharmaceuticals", icon: Pill, desc: "Temperature-resistant & sterile grade packaging materials." },
  { name: "Home Appliances", icon: Monitor, desc: "Shock-absorbing EPE foam and bubble wraps for safe transit." },
  { name: "Telecommunications", icon: Server, desc: "Customized foam inserts for delicate server and telecom equipment." },
  { name: "Gensets", icon: Power, desc: "Heavy-duty transit protection and sound dampening foam applications." },
  { name: "Industrial Equipment", icon: Factory, desc: "Bulk packaging and precision die-cut profiles for heavy machinery." },
  { name: "Computers", icon: Box, desc: "Customized cushioning systems for complete IT hardware protection." },
];

export function IndustriesPreview({ preview = false }: { preview?: boolean }) {
  return (
    <section className="py-16 px-6 lg:px-12 bg-white">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <div className="text-xs font-semibold tracking-[0.25em] text-accent uppercase font-mono mb-4">
                Sectors
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                Industries We Serve
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.05}>
              <div className="group h-full flex flex-col gap-4 rounded-[1.5rem] border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(249,115,22,0.35)] hover:shadow-[0_18px_40px_rgba(17,24,39,0.05)]">
                <div className="w-12 h-12 rounded-full bg-[#F8F9FA] flex items-center justify-center border border-border group-hover:bg-accent/10 group-hover:border-accent/20 transition-colors">
                  <ind.icon className="w-5 h-5 text-secondary group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors mb-2">
                    {ind.name}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {preview && (
          <Reveal delay={0.4}>
            <div className="mt-12 flex justify-center">
              <Link
                href="/industries"
                className="group inline-flex items-center justify-center gap-3 bg-white border border-border text-primary font-bold text-sm tracking-[0.15em] px-8 py-4 transition-all duration-300 rounded-full uppercase hover:border-[rgba(249,115,22,0.35)] hover:shadow-lg hover:text-accent"
              >
                View All Industries
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
