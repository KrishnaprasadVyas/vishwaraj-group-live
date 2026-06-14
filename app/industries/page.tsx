import type { Metadata } from "next";
import Link from "next/link";

import { ArrowUpRight, Factory, Package, ChevronRight } from "lucide-react";

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
      <section className="relative overflow-hidden bg-[#F8F9FA] pt-36 pb-20 px-6 lg:px-12 border-b border-border">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-xs font-semibold tracking-[0.25em] text-[#F97316] uppercase font-mono mb-6">
              Sectors We Serve
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="massive-text text-primary leading-[0.88]">
              <span>INDUSTRIAL</span>
              <br />
              <span className="opacity-30">REACH.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-secondary">
              From automotive spare parts to pharmaceutical cold-chain logistics — our
              packaging solutions are field-tested across {industries.length} demanding sectors.
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
                  className="group relative h-full rounded-[2rem] border border-border bg-white p-7 shadow-[0_18px_46px_rgba(17,24,39,0.04)] hover:border-[rgba(249,115,22,0.35)] hover:shadow-[0_24px_60px_rgba(17,24,39,0.08)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="text-[10px] font-semibold tracking-[0.22em] text-secondary uppercase font-mono">
                        Industry
                      </div>
                      <h2 className="mt-2 text-2xl font-bold text-primary group-hover:text-[#F97316] transition-colors duration-300">
                        {industry.industry}
                      </h2>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[rgba(249,115,22,0.08)] text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300">
                      <Factory className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Applications */}
                  {industry.applications.length > 0 && (
                    <div className="mb-4 rounded-2xl border border-border bg-[#F8F9FA] p-4">
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
                    <div className="rounded-2xl border border-border bg-[#F8F9FA] p-4">
                      <div className="text-[10px] font-semibold tracking-[0.18em] text-secondary uppercase font-mono mb-3">
                        Products Used
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {industry.products.map((product) => (
                          <span
                            key={product}
                            className="inline-flex items-center gap-1.5 rounded-full bg-white border border-border px-3 py-1 text-xs font-medium text-primary shadow-sm"
                          >
                            <Package className="h-3 w-3 text-[#F97316]" />
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

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
      <section className="py-20 px-6 lg:px-12 bg-[#F3F4F6] border-t border-border">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-[2.5rem] bg-[#111827] text-white p-12 lg:p-20 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.12),_transparent_45%)] pointer-events-none" />
              <div className="max-w-2xl relative z-10">
                <div className="text-xs font-semibold tracking-[0.25em] text-[#F97316] uppercase font-mono">
                  Need industry-specific packaging?
                </div>
                <h3 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
                  Let's engineer the right solution.
                </h3>
                <p className="mt-5 text-lg leading-8 text-zinc-400">
                  Our team can develop application-specific foam conversion and barrier packaging tailored to your industrial tolerances.
                </p>
              </div>
              <Link
                href="/contact"
                className="relative z-10 inline-flex items-center gap-2 justify-center rounded-full bg-[#F97316] px-8 py-4.5 text-sm font-semibold text-white shadow-[0_18px_34px_rgba(249,115,22,0.35)] transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-0.5 shrink-0"
              >
                Request Quote
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
