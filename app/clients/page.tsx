import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ShieldCheck, Cog, Clock, ThumbsUp, MapPin, Award, Building2, Package, Car, Cpu, Pill, Wrench, Factory, ShoppingCart } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { ClientShowcase } from "@/components/client-showcase";

export const metadata: Metadata = {
  title: "Our Clients | Vishwaraj Polychem",
  description:
    "Vishwaraj Polychem has been serving leading industries since 1999 with trusted protective packaging solutions. Explore our client showcase.",
};

const industries = [
  { name: "Automotive", icon: Car, desc: "Specialized foam dunnage & component protection." },
  { name: "Electronics", icon: Cpu, desc: "Anti-static bubble bags & sensitive equipment packaging." },
  { name: "Pharmaceuticals", icon: Pill, desc: "Temperature-resistant & sterile grade packaging." },
  { name: "Engineering", icon: Wrench, desc: "Heavy-duty transit protection for machined parts." },
  { name: "Manufacturing", icon: Factory, desc: "Bulk industrial packaging & supply chain optimization." },
  { name: "Export Packaging", icon: Package, desc: "ISPM-15 compliant and long-voyage moisture protection." },
  { name: "Consumer Goods", icon: ShoppingCart, desc: "Retail-ready protective wraps and aesthetic padding." },
];

export default function ClientsPage() {

  return (
    <div className="relative min-h-screen bg-[#F8F9FA]">
      {/* ── Compact Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary pt-[96px] pb-10 px-6 lg:px-12 border-b border-white/10 flex items-center min-h-[250px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary/95"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="mx-auto max-w-7xl relative z-10 w-full text-center">
          <Reveal>
            <div className="text-xs font-semibold tracking-[0.25em] text-accent uppercase font-mono mb-4">
              Our Partners
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Our Clients
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-zinc-300">
              Serving leading industries since 1999 with trusted protective packaging solutions. We build partnerships that last through manufacturing excellence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Statistics & Trust ─────────────────────────────────────────────── */}
      <section className="py-12 px-6 lg:px-12 bg-white">
        <div className="mx-auto max-w-7xl grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <Reveal delay={0.1}>
            <div className="h-full flex flex-col items-center justify-center rounded-[1.5rem] border border-border bg-[#F8F9FA] p-6 text-center">
              <Award className="w-8 h-8 mx-auto text-accent mb-4" />
              <div className="text-3xl font-extrabold text-primary mb-1">25+</div>
              <div className="text-sm font-semibold tracking-wider text-secondary uppercase">Years Experience</div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="h-full flex flex-col items-center justify-center rounded-[1.5rem] border border-border bg-[#F8F9FA] p-6 text-center">
              <ShieldCheck className="w-8 h-8 mx-auto text-accent mb-4" />
              <div className="text-3xl font-extrabold text-primary mb-1">22+</div>
              <div className="text-sm font-semibold tracking-wider text-secondary uppercase">Trusted Clients</div>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="h-full flex flex-col items-center justify-center rounded-[1.5rem] border border-border bg-[#F8F9FA] p-6 text-center">
              <MapPin className="w-8 h-8 mx-auto text-accent mb-4" />
              <div className="text-3xl font-extrabold text-primary mb-1">Pan India</div>
              <div className="text-sm font-semibold tracking-wider text-secondary uppercase">Supply Network</div>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="h-full flex flex-col items-center justify-center rounded-[1.5rem] border border-border bg-[#F8F9FA] p-6 text-center">
              <Building2 className="w-8 h-8 mx-auto text-accent mb-4" />
              <div className="text-3xl font-extrabold text-primary mb-1">7+</div>
              <div className="text-sm font-semibold tracking-wider text-secondary uppercase">Industries Served</div>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-primary mb-8">
              Why Industry Leaders Trust Us
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
             <div className="flex flex-col items-center p-4">
                <ShieldCheck className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-bold text-primary mb-2">Uncompromised Quality</h3>
                <p className="text-sm text-secondary">Rigorous ISO certified testing.</p>
             </div>
             <div className="flex flex-col items-center p-4">
                <Cog className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-bold text-primary mb-2">Engineering Expertise</h3>
                <p className="text-sm text-secondary">Custom die-cut solutions.</p>
             </div>
             <div className="flex flex-col items-center p-4">
                <Clock className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-bold text-primary mb-2">On-Time Delivery</h3>
                <p className="text-sm text-secondary">Just-in-time supply chain.</p>
             </div>
             <div className="flex flex-col items-center p-4">
                <ThumbsUp className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-bold text-primary mb-2">Consistency</h3>
                <p className="text-sm text-secondary">Reliable batch-to-batch specs.</p>
             </div>
          </div>
        </div>
      </section>

      {/* ── Client Showcase Grid ─────────────────────────────────────────────── */}
      <ClientShowcase />

      {/* ── Industries Served ─────────────────────────────────────────────── */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-graphite relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,0,0.15),transparent_60%)]"></div>
        <div className="container-shell relative z-10 text-center">
          <Reveal>
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mb-8">
              <ArrowUpRight className="h-8 w-8 text-accent" />
            </div>
            <h2 className="display-l text-white mb-6">
              Ready to Upgrade Your Supply Chain?
            </h2>
            <p className="body-large text-zinc-400 mb-12 max-w-2xl mx-auto">
              Partner with an enterprise-grade manufacturer capable of scaling to your most demanding requirements.
              Schedule a technical consultation with our engineering team today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-accent text-white font-bold text-sm tracking-[0.15em] px-12 py-6 hover:bg-white hover:text-primary transition-all duration-300 rounded-full uppercase premium-shadow magnetic-hover"
            >
              Request Enterprise Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
