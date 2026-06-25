import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { ArrowLeft, ArrowRight, BadgeInfo, Package2, Sparkles, ChevronRight, ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { allProducts, getProductBySlug, productGroups, summarizeText, getProductImage } from "@/lib/content";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

function renderSpecificationValue(value: unknown): string {
  if (Array.isArray(value)) {
    return value.filter(Boolean).join(", ");
  }

  if (value && typeof value === "object") {
    return Object.entries(value)
      .map(([key, entry]) => `${key}: ${renderSpecificationValue(entry)}`)
      .join(" · ");
  }

  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  return "";
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: summarizeText(product.description, 160),
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.name,
      description: summarizeText(product.description, 160),
      url: `/products/${product.slug}`,
      images: ["/og-image.svg"],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const productImage = getProductImage(product.slug, product.categorySlug);

  // Find related products from same category
  const categoryGroup = productGroups.find((g) => g.slug === product.categorySlug);
  const relatedProducts = (categoryGroup?.products ?? [])
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  const specEntries = Object.entries(product.specifications ?? {}).filter(([, v]) =>
    Boolean(renderSpecificationValue(v))
  );

  // Gather all tag-like data
  const tagLists: { label: string; items: string[] }[] = [
    { label: "Applications", items: product.applications ?? [] },
    { label: "Industry Use", items: product.industryApplications ?? [] },
    { label: "Types", items: product.types ?? [] },
    { label: "Sub-Products", items: product.subProducts ?? [] },
    { label: "Grades", items: product.grades ?? [] },
    { label: "Range", items: product.range ?? [] },
  ].filter((t) => t.items.length > 0);

  return (
    <div className="relative min-h-screen">
      {/* ── Breadcrumb + Hero ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F8F9FA] pt-32 pb-0 px-6 lg:px-12 border-b border-border">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-secondary mb-8 font-mono">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href={`/products#${product.categorySlug}`} className="hover:text-primary transition-colors">
                {product.categoryName}
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-primary font-semibold">{product.name}</span>
            </div>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-[0.5fr_0.5fr] lg:items-end pb-0">
            {/* Left: title block */}
            <div className="pb-12">
              <Reveal>
                <div className="text-xs font-semibold tracking-[0.25em] text-[#F97316] uppercase font-mono mb-5">
                  {product.categoryName}
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.05]">
                  {product.name}
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 text-lg leading-8 text-secondary max-w-lg">
                  {product.description}
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F97316] px-7 py-3.5 text-xs font-bold tracking-wider text-white uppercase shadow-[0_12px_24px_rgba(249,115,22,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(249,115,22,0.36)]"
                  >
                    Request Quote
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-7 py-3.5 text-xs font-bold tracking-wider text-primary uppercase hover:border-[rgba(249,115,22,0.35)] hover:text-[#F97316] transition-all duration-300"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    All Products
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right: product image (bleeds to bottom) */}
            <Reveal delay={0.1} className="relative h-[360px] lg:h-[420px] overflow-hidden rounded-t-[2.5rem] border-x border-t border-border bg-white shadow-[0_-20px_50px_rgba(17,24,39,0.04)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.05),transparent_50%)] z-10 pointer-events-none" />
              <Image
                src={productImage}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                <span className="rounded-full bg-white/90 backdrop-blur border border-border px-3 py-1 text-[10px] font-bold tracking-wider text-secondary uppercase font-mono">
                  Industrial Grade
                </span>
                <span className="rounded-full bg-white/90 backdrop-blur border border-border px-3 py-1 text-[10px] font-bold tracking-wider text-secondary uppercase font-mono">
                  Pune MIDC
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Details ───────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">

          {/* Specifications */}
          <div className="space-y-6">
            {specEntries.length > 0 && (
              <Reveal>
                <div className="rounded-[2rem] border border-border bg-white p-8 shadow-[0_20px_50px_rgba(17,24,39,0.03)]">
                  <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-secondary uppercase border-b border-border pb-4 mb-6">
                    <BadgeInfo className="h-4 w-4 text-[#F97316]" />
                    Technical Specifications
                  </div>
                  <div className="grid gap-2">
                    {specEntries.map(([key, value]) => {
                      const rendered = renderSpecificationValue(value);
                      return (
                        <div
                          key={key}
                          className="flex flex-col sm:flex-row sm:justify-between gap-1 py-3.5 border-b border-border/60 last:border-0"
                        >
                          <span className="text-xs font-bold tracking-[0.1em] text-primary uppercase font-mono shrink-0">
                            {key}
                          </span>
                          <span className="text-sm text-secondary sm:text-right max-w-sm">{rendered}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            )}

            {/* Tag groups */}
            {tagLists.map((tagList, i) => (
              <Reveal key={tagList.label} delay={i * 0.05}>
                <div
                  className={`rounded-[2rem] border p-7 shadow-sm ${
                    tagList.label === "Applications"
                      ? "border-[rgba(249,115,22,0.18)] bg-[linear-gradient(135deg,rgba(249,115,22,0.04),rgba(255,255,255,0.98))]"
                      : "border-border bg-[#F8F9FA]"
                  }`}
                >
                  <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-secondary uppercase mb-5">
                    {tagList.label === "Applications" ? (
                      <Sparkles className="h-4 w-4 text-[#F97316]" />
                    ) : (
                      <Package2 className="h-4 w-4 text-[#F97316]" />
                    )}
                    {tagList.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tagList.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white border border-border px-4 py-1.5 text-xs font-medium text-primary shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right: CTA + related */}
          <div className="space-y-6 lg:sticky lg:top-28">
            {/* Quote CTA card */}
            <Reveal>
              <div className="rounded-[2rem] border border-[rgba(249,115,22,0.2)] bg-[linear-gradient(135deg,rgba(249,115,22,0.05),rgba(255,255,255,0.98))] p-8">
                <div className="text-xs font-semibold tracking-[0.22em] text-[#F97316] uppercase font-mono mb-4">
                  Interested in this product?
                </div>
                <h3 className="text-2xl font-extrabold text-primary mb-4">
                  Get a custom quote.
                </h3>
                <p className="text-sm leading-7 text-secondary mb-6">
                  Tell us your dimensions, volume requirements, and application — we&apos;ll engineer the right solution.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center rounded-full bg-[#F97316] px-6 py-3.5 text-xs font-bold tracking-wider text-white uppercase shadow-[0_12px_24px_rgba(249,115,22,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(249,115,22,0.36)]"
                >
                  Request Quote
                </Link>
              </div>
            </Reveal>

            {/* Related products */}
            {relatedProducts.length > 0 && (
              <Reveal delay={0.1}>
                <div className="rounded-[2rem] border border-border bg-white p-6 shadow-sm">
                  <div className="text-xs font-semibold tracking-[0.22em] text-secondary uppercase font-mono mb-4">
                    More from {product.categoryName}
                  </div>
                  <div className="grid gap-3">
                    {relatedProducts.map((related) => {
                      const relImg = getProductImage(related.slug, related.categorySlug);
                      return (
                        <Link
                          key={related.slug}
                          href={`/products/${related.slug}`}
                          className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-[#F8F9FA] p-3 hover:border-[rgba(249,115,22,0.35)] hover:bg-white transition-all duration-200"
                        >
                          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-border bg-white">
                            <Image
                              src={relImg}
                              alt={related.name}
                              fill
                              className="object-cover"
                              sizes="56px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold text-primary group-hover:text-[#F97316] transition-colors truncate">
                              {related.name}
                            </div>
                            <div className="text-[10px] text-secondary mt-0.5 truncate">
                              {summarizeText(related.description, 65)}
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-secondary shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-[#F97316]" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
