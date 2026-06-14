import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { productGroups, summarizeText, getProductImage, allProducts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products — Protective Packaging & Foam Solutions",
  description:
    "Browse Vishwaraj Polychem's complete range of protective packaging materials — EPE foam, air bubble film, laminated bags, stretch film, and industrial chemicals.",
};

export default function ProductsPage() {
  // First product image per category as a cover
  const topProducts = productGroups
    .map((group) => group.products[0])
    .filter(Boolean)
    .slice(0, 4);

  return (
    <div className="relative min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F8F9FA] pt-36 pb-20 px-6 lg:px-12 border-b border-border">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[0.55fr_0.45fr] items-end">
          <div>
            <Reveal>
              <div className="text-xs font-semibold tracking-[0.25em] text-[#F97316] uppercase font-mono mb-6">
                Product Catalog
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="massive-text text-primary leading-[0.88]">
                <span>PRECISION</span>
                <br />
                <span className="opacity-30">PROTECTION.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-8 max-w-xl text-xl leading-9 text-secondary">
                {allProducts.length}+ products spanning EPE foam, bubble film, technical rubber
                foam, stretch film, and industrial chemicals — all manufactured at our Pune MIDC facility.
              </p>
            </Reveal>
          </div>

          {/* Feature image mosaic */}
          <Reveal delay={0.2} className="hidden lg:grid grid-cols-2 gap-3">
            {topProducts.map((product, i) => {
              const img = getProductImage(product.slug, product.categorySlug);
              return (
                <div
                  key={product.slug}
                  className={`relative overflow-hidden rounded-2xl border border-border bg-[#F3F4F6] ${i === 0 ? "aspect-square" : "aspect-[4/3]"} shadow-sm`}
                >
                  <Image
                    src={img}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 0px, 200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-2 left-2 text-[9px] font-bold tracking-widest text-white uppercase font-mono leading-tight">
                    {product.name}
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* ── Category Jump Nav ─────────────────────────────────── */}
      <section className="sticky top-[5rem] z-30 bg-white/95 backdrop-blur-xl border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 no-scrollbar">
            {productGroups.map((group) => (
              <a
                key={group.slug}
                href={`#${group.slug}`}
                className="shrink-0 rounded-full border border-border bg-[#F8F9FA] px-4 py-1.5 text-[10px] font-semibold tracking-wider text-secondary uppercase hover:border-[rgba(249,115,22,0.4)] hover:text-primary hover:bg-white transition-all duration-200 whitespace-nowrap"
              >
                {group.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Product Groups ────────────────────────────────── */}
      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="mx-auto max-w-7xl grid gap-14">
          {productGroups.map((group, groupIndex) => (
            <Reveal key={group.slug} delay={groupIndex * 0.03}>
              <section
                id={group.slug}
                className="scroll-mt-28 rounded-[2.5rem] border border-border bg-white p-7 shadow-[0_20px_56px_rgba(17,24,39,0.03)] sm:p-10"
              >
                {/* Category header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between pb-7 mb-8 border-b border-border">
                  <div>
                    <div className="text-[10px] font-semibold tracking-[0.22em] text-secondary uppercase font-mono">
                      Category
                    </div>
                    <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                      {group.name}
                    </h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-secondary">
                      {group.products.length} products
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-[#F8F9FA] px-4 py-2 text-[10px] font-bold tracking-wider text-primary uppercase hover:border-[rgba(249,115,22,0.4)] hover:text-[#F97316] transition-all duration-200"
                    >
                      Enquire
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Products */}
                <div className="grid gap-5 md:grid-cols-2">
                  {group.products.map((product) => {
                    const productImage = getProductImage(product.slug, group.slug);
                    return (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        className="group flex flex-col sm:flex-row gap-5 rounded-[1.75rem] border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(249,115,22,0.35)] hover:shadow-[0_18px_40px_rgba(17,24,39,0.05)]"
                      >
                        <div className="relative shrink-0 overflow-hidden rounded-2xl border border-border bg-[#F3F4F6] aspect-[4/3] w-full sm:w-36 h-28">
                          <Image
                            src={productImage}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, 160px"
                          />
                        </div>

                        <div className="flex flex-col justify-between flex-1">
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="text-base font-bold text-primary group-hover:text-[#F97316] transition-colors leading-snug">
                                {product.name}
                              </h3>
                              <ArrowRight className="h-4 w-4 text-secondary shrink-0 mt-0.5 transition-transform group-hover:translate-x-1 group-hover:text-[#F97316]" />
                            </div>
                            <p className="mt-2 text-xs leading-5 text-secondary">
                              {summarizeText(product.description, 110)}
                            </p>
                          </div>

                          {product.applications.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-1">
                              {product.applications.slice(0, 2).map((application) => (
                                <span
                                  key={application}
                                  className="rounded-full border border-border bg-[#F8F9FA] px-2.5 py-0.5 text-[10px] font-medium text-secondary"
                                >
                                  {application}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-16 px-6 lg:px-12 bg-[#F3F4F6] border-t border-border">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-[2.5rem] bg-[#111827] text-white p-12 lg:p-20 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.12),_transparent_45%)] pointer-events-none" />
              <div className="max-w-xl relative z-10">
                <div className="text-xs font-semibold tracking-[0.25em] text-[#F97316] uppercase font-mono">
                  Can't find what you need?
                </div>
                <h3 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
                  We build custom solutions.
                </h3>
                <p className="mt-5 text-lg leading-8 text-zinc-400">
                  Our team handles bespoke foam conversion and packaging design for unique
                  industrial and export requirements.
                </p>
              </div>
              <Link
                href="/contact"
                className="relative z-10 inline-flex items-center gap-2 justify-center rounded-full bg-[#F97316] px-8 py-4.5 text-sm font-semibold text-white shadow-[0_18px_34px_rgba(249,115,22,0.35)] transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-0.5 shrink-0"
              >
                Request Custom Spec
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
