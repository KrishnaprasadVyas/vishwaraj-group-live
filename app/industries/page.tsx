import type { Metadata } from "next";
import Link from "next/link";

import { ArrowUpRight, Factory, Package, ChevronRight, ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries Served",
  description:
    "Vishwaraj Polychem supplies protective packaging materials to automotive, electronics, pharmaceutical, FMCG, industrial, and logistics sectors across India.",
};

export default function IndustriesPage() {
  return (
    <div className="relative min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary pt-[96px] pb-10 px-6 lg:px-12 border-b border-white/10 flex items-center min-h-[300px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary/95"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="mx-auto max-w-7xl relative z-10 w-full text-center">
          <Reveal>
            <div className="text-xs font-semibold tracking-[0.25em] text-accent uppercase font-mono mb-4">
              Sectors We Serve
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Industrial Reach.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-zinc-300">
              From automotive spare parts to pharmaceutical cold-chain logistics — our packaging solutions are field-tested across {industries.length} demanding sectors.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Industry grid ─────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="mx-auto max-w-7xl">

          {/* Count strip */}
          <Reveal>
            <div className="flex items-center justify-between mb-12 pb-6 border-b border-border">
              <div className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase font-mono">
                All Industries
              </div>
              <div className="text-xs font-semibold tracking-[0.2em] text-secondary uppercase font-mono">
                {industries.length} Sectors
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => (
              <Reveal key={industry.slug} delay={index * 0.035}>
                <article
                  id={industry.slug}
                  className="group relative h-full flex flex-col rounded-[1.5rem] border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(249,115,22,0.35)] hover:shadow-[0_18px_40px_rgba(17,24,39,0.05)]"
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="text-[10px] font-semibold tracking-[0.22em] text-secondary uppercase font-mono mb-2">
                        Industry
                      </div>
                      <h2 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                        {industry.industry}
                      </h2>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#F8F9FA] flex items-center justify-center border border-border group-hover:bg-accent/10 group-hover:border-accent/20 transition-colors shrink-0">
                      <Factory className="h-5 w-5 text-secondary group-hover:text-accent transition-colors" />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-4">
                    {/* Applications */}
                    {industry.applications.length > 0 && (
                      <div className="rounded-2xl border border-border bg-[#F8F9FA] p-4 flex-1">
                        <div className="text-[10px] font-semibold tracking-[0.18em] text-secondary uppercase font-mono mb-3">
                          Applications
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {industry.applications.map((application) => (
                            <span
                              key={application}
                              className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-secondary"
                            >
                              {application}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Products */}
                    {industry.products.length > 0 && (
                      <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex-1">
                        <div className="text-[10px] font-semibold tracking-[0.18em] text-secondary uppercase font-mono mb-3">
                          Products Used
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {industry.products.map((product) => (
                            <span
                              key={product}
                              className="inline-flex items-center gap-1.5 rounded-full bg-[#F8F9FA] border border-border px-3 py-1 text-xs font-medium text-secondary"
                            >
                              <Package className="h-3 w-3 text-accent" />
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom CTA */}
                  <div className="mt-5 flex items-center gap-1.5 text-[10px] font-bold tracking-[0.18em] text-secondary uppercase font-mono group-hover:text-[#F97316] transition-colors">
                    <ChevronRight className="h-3.5 w-3.5" />
                    View Solutions
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
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
