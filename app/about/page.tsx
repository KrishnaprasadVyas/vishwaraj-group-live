import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ShieldCheck, Wrench, Factory } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { WhyChooseUs } from "@/components/why-choose-us";
import { IndustriesPreview } from "@/components/industries-preview";
import { StatisticsGrid } from "@/components/statistics-grid";

export const metadata: Metadata = {
  title: "About Us | Vishwaraj Polychem",
  description:
    "Established in 1999, Vishwaraj Polychem is a premier manufacturer of protective packaging materials based in Pune, delivering engineering excellence.",
};

// Industries data moved to components/industries-preview.tsx

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#F8F9FA]">
      
      {/* ── 1. Compact Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary pt-[96px] pb-10 px-6 lg:px-12 border-b border-white/10 flex items-center min-h-[300px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary/95"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="mx-auto max-w-7xl relative z-10 w-full text-center">
          <Reveal>
            <div className="text-xs font-semibold tracking-[0.25em] text-accent uppercase font-mono mb-4">
              About Us
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Engineering Excellence Since 1999.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-zinc-300">
              We are professionally engaged in manufacturing advanced protective packaging materials, safeguarding your products against all odds.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 2. Company Overview ─────────────────────────────────────────────── */}
      <section className="py-16 px-6 lg:px-12 bg-white border-b border-border">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight text-primary mb-6">
                Vishwaraj Polychem Private Limited
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-lg leading-relaxed text-secondary">
                <p>
                  Incorporated in the year 1999, we manufacture packaging materials developed from quality foam. Located at the industrial hub of Pune, Maharashtra, we are one of the most reputed manufacturers, suppliers, and service providers of a wide range of protective foam products.
                </p>
                <p>
                  Our comprehensive product categories include PU foam, EPE foam, Air Bubble Film and Pouches, and Crosslinked Foam. We intend to render absolute safe packaging for computers, automotive parts, pharmaceuticals, home appliances, telecommunication equipment, and heavy gensets.
                </p>
                <p>
                  We have well-integrated marketing and distribution teams making our products available in every nook and corner. Our effective strategies enable us to personally connect with our customers and serve each product desired by them with molecular-level precision.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero_factory.png"
                alt="Vishwaraj Polychem Manufacturing Facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 3. Why Choose Vishwaraj ─────────────────────────────────────────────── */}
      <WhyChooseUs />

      {/* ── 4. Industries We Serve ─────────────────────────────────────────────── */}
      <IndustriesPreview />

      {/* ── 5. Manufacturing Excellence ─────────────────────────────────────────────── */}
      <section className="py-16 px-6 lg:px-12 bg-[#F8F9FA] border-b border-border">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-[0.45fr_0.55fr] items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/warehouse_logistics.png"
                  alt="Warehouse & Logistics"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/epe_11.png"
                  alt="Foam Conversion Machinery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[2/1] col-span-2 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/epe-sheet-stack.png"
                  alt="Foam Manufacturing Precision"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="text-xs font-semibold tracking-[0.25em] text-accent uppercase font-mono mb-4">
                Operations
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-primary mb-6">
                Manufacturing Excellence
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-secondary mb-8">
                The company has set up a robust infrastructure equipped with advanced technological tools. Our factory features dedicated zones for extrusion, lamination, and precision die-cutting, ensuring we handle bulk industrial orders while maintaining stringent quality control across every batch.
              </p>
              <ul className="space-y-5">
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-border shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Quality Raw Materials</h4>
                    <p className="text-sm text-secondary mt-1">Sourcing superior polymers to ensure absolute consistency.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-border shadow-sm">
                    <Wrench className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Precision Engineering</h4>
                    <p className="text-sm text-secondary mt-1">Advanced die-cutting and laminating techniques.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-border shadow-sm">
                    <Factory className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Modern Infrastructure</h4>
                    <p className="text-sm text-secondary mt-1">High-capacity extrusion lines and conversion centers.</p>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6. Statistics ─────────────────────────────────────────────── */}
      <StatisticsGrid />

      {/* ── 7. Final CTA ──────────────────────────────────────────────── */}
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
