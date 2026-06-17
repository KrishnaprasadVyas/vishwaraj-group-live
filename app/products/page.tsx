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
      <section className="relative overflow-hidden bg-primary pt-[96px] pb-10 px-6 lg:px-12 border-b border-white/10 flex items-center min-h-[300px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary/95"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="mx-auto max-w-7xl relative z-10 w-full text-center">
          <Reveal>
            <div className="text-xs font-semibold tracking-[0.25em] text-accent uppercase font-mono mb-4">
              Product Catalog
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Precision Protection.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-zinc-300">
              {allProducts.length}+ products spanning EPE foam, bubble film, technical rubber foam, stretch film, and industrial chemicals — all manufactured at our Pune MIDC facility.
            </p>
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
      <section className="py-10 px-6 lg:px-12 bg-white">
        <div className="mx-auto max-w-7xl grid gap-10">
          {productGroups.map((group, groupIndex) => (
            <Reveal key={group.slug} delay={groupIndex * 0.03}>
              <section
                id={group.slug}
                className="scroll-mt-28 rounded-[2.5rem] border border-border bg-white p-6 sm:p-8 shadow-[0_20px_56px_rgba(17,24,39,0.03)]"
              >
                {/* Category header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between pb-5 mb-6 border-b border-border">
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
                <div className="grid gap-4 md:grid-cols-2">
                  {group.products.map((product) => {
                    const productImage = getProductImage(product.slug, group.slug);
                    return (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        className="group flex flex-col sm:flex-row gap-4 rounded-[1.5rem] border border-border bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(249,115,22,0.35)] hover:shadow-[0_18px_40px_rgba(17,24,39,0.05)]"
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
