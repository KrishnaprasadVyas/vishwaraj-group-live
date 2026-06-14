import Link from "next/link";
import Image from "next/image";

import { ArrowRight, CheckCircle2, ShieldCheck, Clock, HelpCircle, Sparkles, Layers } from "lucide-react";

import { BackgroundShader } from "@/components/background-shader";
import { MolecularView } from "@/components/molecular-view";
import { SectorsSection } from "@/components/sectors-section";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  allProducts,
  displayYearsSinceFounded,
  featuredProducts,
  industries,
  siteConfig,
  summarizeText,
  getProductImage,
} from "@/lib/content";

export const metadata = {
  title: "Protective Packaging Materials Manufacturer",
  description:
    "Premium protective packaging materials and foam conversion solutions for manufacturing, logistics, automotive, electronics, and industrial applications.",
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background WebGL Shader */}
      <BackgroundShader />

      {/* Cinematic Hero */}
      <header className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden pt-32 px-6 lg:px-12">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/images/epe-foam-texture.png"
            alt="EPE Foam texture backdrop"
            className="w-full h-full object-cover opacity-[0.08] transition-transform duration-700 bg-zoom-effect"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8F9FA]/40 to-[#F8F9FA] z-20"></div>
        </div>

        <div className="w-full max-w-7xl mx-auto relative z-30">
          <Reveal>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold tracking-wider text-secondary shadow-sm uppercase font-mono mb-stack-sm">
              <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
              Pune Talawade MIDC Manufacturing
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="massive-text text-[color:var(--primary)] mb-stack-md flex flex-col text-left leading-[0.88] mt-4">
              <span>PROTECTIVE</span>
              <span className="opacity-35">PACKAGING.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="font-body-lg text-body-lg text-[color:var(--secondary)] md:w-1/2 mb-stack-lg leading-relaxed mt-6">
              Custom EPE Foam, Air Bubble Film and Protective Packaging Solutions engineered for automotive spare parts, electronics, pharmaceuticals, and industrial manufacturing workflows.
            </p>
          </Reveal>
          <Reveal delay={0.35} className="mt-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-[#F97316] text-white font-semibold text-xs tracking-wider px-8 py-4.5 hover:bg-black transition-colors duration-300 rounded-sm uppercase"
              >
                EXPLORE SOLUTIONS
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-border bg-white text-[color:var(--primary)] font-semibold text-xs tracking-wider px-8 py-4.5 hover:border-[rgba(249,115,22,0.35)] hover:text-[#F97316] transition-all duration-300 rounded-sm uppercase"
              >
                Request Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Trust Section (Marquee Infinite Scroll) */}
      <section className="py-16 overflow-hidden border-y border-border bg-white">
        <div className="scrolling-wrapper items-center gap-24 opacity-35">
          <div className="flex items-center gap-24 shrink-0">
            <div className="text-3xl font-extrabold tracking-[0.25em] text-[color:var(--primary)] uppercase font-heading">AUTOMOTIVE</div>
            <div className="text-3xl font-extrabold tracking-[0.25em] text-[color:var(--primary)] uppercase font-heading">ELECTRONICS</div>
            <div className="text-3xl font-extrabold tracking-[0.25em] text-[color:var(--primary)] uppercase font-heading">PHARMACEUTICAL</div>
            <div className="text-3xl font-extrabold tracking-[0.25em] text-[color:var(--primary)] uppercase font-heading">INDUSTRIAL</div>
            <div className="text-3xl font-extrabold tracking-[0.25em] text-[color:var(--primary)] uppercase font-heading">LOGISTICS</div>
          </div>
          <div className="flex items-center gap-24 shrink-0">
            <div className="text-3xl font-extrabold tracking-[0.25em] text-[color:var(--primary)] uppercase font-heading">AUTOMOTIVE</div>
            <div className="text-3xl font-extrabold tracking-[0.25em] text-[color:var(--primary)] uppercase font-heading">ELECTRONICS</div>
            <div className="text-3xl font-extrabold tracking-[0.25em] text-[color:var(--primary)] uppercase font-heading">PHARMACEUTICAL</div>
            <div className="text-3xl font-extrabold tracking-[0.25em] text-[color:var(--primary)] uppercase font-heading">INDUSTRIAL</div>
            <div className="text-3xl font-extrabold tracking-[0.25em] text-[color:var(--primary)] uppercase font-heading">LOGISTICS</div>
          </div>
        </div>
      </section>

      {/* Product Showcase Centerpiece (Alternating Editorial) */}
      <section className="py-24 sm:py-36 px-6 lg:px-12 bg-white" id="products">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <Reveal>
              <h2 className="text-xs font-semibold tracking-[0.25em] text-[#F97316] uppercase font-mono">OUR CAPABILITIES</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="mt-3 text-4xl font-extrabold tracking-tight text-[color:var(--primary)] sm:text-6xl">
                Precision Protection
              </h3>
            </Reveal>
          </div>

          <div className="flex flex-col gap-32">
            {/* EPE Foam Block */}
            <Reveal className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-[62%] rounded-xl overflow-hidden bg-gray-50 border border-border shadow-[0_20px_50px_rgba(0,0,0,0.03)] aspect-[16/10] relative">
                <Image
                  src="/images/epe-foam-texture.png"
                  alt="Engineered EPE Foam"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="w-full lg:w-[38%] space-y-8">
                <h4 className="text-3xl lg:text-4xl font-bold text-[color:var(--primary)] leading-tight">
                  Engineered Polyethylene (EPE) Foam
                </h4>
                <p className="text-lg leading-8 text-[color:var(--secondary)]">
                  Closed-cell structure providing superior shock absorption, thermal insulation, and moisture resistance. Custom conversion into sheets, tubes, rolls, and fitments.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-[#F3F4F6] border border-border rounded-lg">
                    <div className="text-4xl font-bold text-[#F97316]">99%</div>
                    <div className="text-[10px] font-semibold tracking-wider text-[color:var(--secondary)] uppercase font-mono mt-1.5">Shock Absorption</div>
                  </div>
                  <div className="p-6 bg-[#F3F4F6] border border-border rounded-lg">
                    <div className="text-4xl font-bold text-[#F97316]">0%</div>
                    <div className="text-[10px] font-semibold tracking-wider text-[color:var(--secondary)] uppercase font-mono mt-1.5">Moisture Intake</div>
                  </div>
                </div>
                <Link
                  href="/products/epe-sheet-and-sheet-application"
                  className="group inline-flex items-center gap-2 text-[#F97316] text-xs font-bold tracking-widest uppercase hover:text-black transition-colors"
                >
                  VIEW TECHNICAL SPECS
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>

            {/* Air Bubble Film Block */}
            <Reveal className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="w-full lg:w-[62%] rounded-xl overflow-hidden bg-gray-50 border border-border shadow-[0_20px_50px_rgba(0,0,0,0.03)] aspect-[16/10] relative">
                <Image
                  src="/images/bubble-reflective-texture.png"
                  alt="Industrial Air Bubble Film"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="w-full lg:w-[38%] space-y-8">
                <h4 className="text-3xl lg:text-4xl font-bold text-[color:var(--primary)] leading-tight">
                  Air Bubble Film & Laminated Bags
                </h4>
                <p className="text-lg leading-8 text-[color:var(--secondary)]">
                  Multi-layer co-extruded barrier technology ensuring long-term air retention for sustained protection. Available in laminated woven sack, PE foam, and aluminum sheets.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-[#F3F4F6] border border-border rounded-lg">
                    <div className="text-4xl font-bold text-[#F97316]">3x</div>
                    <div className="text-[10px] font-semibold tracking-wider text-[color:var(--secondary)] uppercase font-mono mt-1.5">Air Retention</div>
                  </div>
                  <div className="p-6 bg-[#F3F4F6] border border-border rounded-lg">
                    <div className="text-4xl font-bold text-[#F97316]">100%</div>
                    <div className="text-[10px] font-semibold tracking-wider text-[color:var(--secondary)] uppercase font-mono mt-1.5">Recyclable PE</div>
                  </div>
                </div>
                <Link
                  href="/products/air-bubble-film"
                  className="group inline-flex items-center gap-2 text-[#F97316] text-xs font-bold tracking-widest uppercase hover:text-black transition-colors"
                >
                  VIEW TECHNICAL SPECS
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>

            {/* Technical Foam Block */}
            <Reveal className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-[62%] rounded-xl overflow-hidden bg-gray-50 border border-border shadow-[0_20px_50px_rgba(0,0,0,0.03)] aspect-[16/10] relative">
                <Image
                  src="/images/vproduct2.jpg"
                  alt="Technical Rubber Base Foam"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="w-full lg:w-[38%] space-y-8">
                <h4 className="text-3xl lg:text-4xl font-bold text-[color:var(--primary)] leading-tight">
                  Rubber Base & PU Foam
                </h4>
                <p className="text-lg leading-8 text-[color:var(--secondary)]">
                  High-performance Crosslinked, EPDM, XLPE, and Nitril foam conversion designed for automotive dampening, HVAC gaskets, and environmental insulation resistance.
                </p>
                <div className="p-6 bg-[#F3F4F6] border border-border rounded-lg w-full">
                  <div className="text-4xl font-bold text-[#F97316]">Industrial</div>
                  <div className="text-[10px] font-semibold tracking-wider text-[color:var(--secondary)] uppercase font-mono mt-1.5">Grade Resilience & Cushioning</div>
                </div>
                <Link
                  href="/products/pu-foam-sheet"
                  className="group inline-flex items-center gap-2 text-[#F97316] text-xs font-bold tracking-widest uppercase hover:text-black transition-colors"
                >
                  VIEW TECHNICAL SPECS
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Signature Section: Three.js Interactive Block */}
      <section className="relative min-h-screen py-24 sm:py-36 bg-white flex items-center border-t border-border/80">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10 grid gap-12 lg:grid-cols-[0.45fr_0.55fr] items-center">
          <div className="space-y-8">
            <Reveal>
              <h2 className="text-xs font-semibold tracking-[0.25em] text-[#F97316] uppercase font-mono">SIGNATURE ENGINEERING</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="text-4xl lg:text-6xl font-bold tracking-tight text-[color:var(--primary)] leading-[1.1]">
                Molecular <br />Precision.
              </h3>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg leading-8 text-[color:var(--secondary)]">
                Explore the closed-cell polymer structure that gives our EPE foam its industry-leading strength-to-weight ratio, resilience, and shock damping.
              </p>
            </Reveal>

            <Reveal delay={0.25} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[rgba(249,115,22,0.08)] flex items-center justify-center text-[#F97316] font-bold text-xs shrink-0">1</div>
                <div>
                  <h5 className="text-[color:var(--primary)] font-bold text-base">Cross-Linked Bonds</h5>
                  <p className="text-[color:var(--secondary)] text-sm mt-1">Enhances thermal stability and shock load retention.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[rgba(249,115,22,0.08)] flex items-center justify-center text-[#F97316] font-bold text-xs shrink-0">2</div>
                <div>
                  <h5 className="text-[color:var(--primary)] font-bold text-base">Micro-Cellular Void</h5>
                  <p className="text-[color:var(--secondary)] text-sm mt-1">Traps inert gas inside closed cells for ultimate impact cushioning.</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative w-full h-[400px] lg:h-[550px] border border-border bg-[#F3F4F6]/50 rounded-[2.5rem] p-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
            <MolecularView />
            <div className="absolute bottom-6 right-6 text-[10px] font-bold tracking-widest text-[color:var(--secondary)] uppercase font-mono flex items-center gap-2 bg-white border border-border px-3.5 py-1.5 rounded-full shadow-sm backdrop-blur">
              <span className="material-symbols-outlined text-xs">360</span>
              DRAG TO ROTATE MODEL
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sectors Served Section */}
      <SectorsSection />

      {/* Why Choose Us */}
      <section className="py-24 sm:py-32 bg-white border-t border-border">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mb-20 text-center">
            <Reveal>
              <h2 className="text-xs font-semibold tracking-[0.25em] text-[#F97316] uppercase font-mono">WHY VISHWARAJ</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="mt-3 text-4xl font-extrabold tracking-tight text-[color:var(--primary)] sm:text-5xl">
                Excellence Delivered
              </h3>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal className="p-8 border border-border rounded-xl bg-[#F8F9FA] hover:bg-white hover:border-[rgba(249,115,22,0.35)] transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-2xl font-bold text-[#F97316] mb-4">01</div>
              <h4 className="text-xl font-bold text-[color:var(--primary)] mb-3">Rigorous Quality</h4>
              <p className="text-sm leading-6 text-[color:var(--secondary)]">Uncompromising QC at every stage, ensuring alignment to customer-specific blueprints and material standards.</p>
            </Reveal>
            <Reveal delay={0.08} className="p-8 border border-border rounded-xl bg-[#F8F9FA] hover:bg-white hover:border-[rgba(249,115,22,0.35)] transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-2xl font-bold text-[#F97316] mb-4">02</div>
              <h4 className="text-xl font-bold text-[color:var(--primary)] mb-3">Extensive Experience</h4>
              <p className="text-sm leading-6 text-[color:var(--secondary)]">Established in 1999 and incorporated in 2018. Over two decades of packaging engineering expertise.</p>
            </Reveal>
            <Reveal delay={0.16} className="p-8 border border-border rounded-xl bg-[#F8F9FA] hover:bg-white hover:border-[rgba(249,115,22,0.35)] transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-2xl font-bold text-[#F97316] mb-4">03</div>
              <h4 className="text-xl font-bold text-[color:var(--primary)] mb-3">Manufacturing Capability</h4>
              <p className="text-sm leading-6 text-[color:var(--secondary)]">Our advanced Pune MIDC facility operates high-speed co-extrusion machinery and customized tooling conversions.</p>
            </Reveal>
            <Reveal delay={0.24} className="p-8 border border-border rounded-xl bg-[#F8F9FA] hover:bg-white hover:border-[rgba(249,115,22,0.35)] transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-2xl font-bold text-[#F97316] mb-4">04</div>
              <h4 className="text-xl font-bold text-[color:var(--primary)] mb-3">Timely Delivery</h4>
              <p className="text-sm leading-6 text-[color:var(--secondary)]">Robust supply chain management and strategic Pune location ensure timely delivery of custom industrial consignments.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Darker CTA Block (Near Bottom) */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:py-28">
        <Reveal>
          <div className="rounded-[2.5rem] bg-[#111827] text-white p-12 lg:p-20 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.1),_transparent_40%)] pointer-events-none" />
            <div className="max-w-2xl relative z-10">
              <div className="text-xs font-semibold tracking-[0.25em] text-[#F97316] uppercase font-mono">Need Protective Packaging Solutions?</div>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
                Let's Discuss Your Requirements.
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Contact our engineering team at Talawade MIDC, Pune to request customized prototype specifications or bulk quotes.
              </p>
            </div>
            <Link
              href="/contact"
              className="relative z-10 inline-flex items-center justify-center rounded-full bg-[#F97316] px-8 py-4.5 text-sm font-semibold text-white shadow-[0_18px_34px_rgba(249,115,22,0.35)] transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-0.5 shrink-0"
            >
              Request Quote
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
