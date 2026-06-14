import type { Metadata } from "next";
import Image from "next/image";

import { Building2, CalendarDays, MapPinned, ShieldCheck, Users, Layers, Trophy, Sparkles } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Vishwaraj Polychem Private Limited, established in 1999 and incorporated in 2018 in Pune, Maharashtra. A trusted manufacturer of EPE foam, bubble film, and protective packaging.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F8F9FA] pt-36 pb-24 px-6 lg:px-12">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/epe-foam-texture.png"
            alt="EPE foam backdrop"
            fill
            className="object-cover opacity-[0.055]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA]/30 via-transparent to-[#F8F9FA]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold tracking-wider text-secondary uppercase font-mono mb-8 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#F97316]" />
              Our Story
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="massive-text text-[color:var(--primary)] leading-[0.88] max-w-5xl">
              <span>BUILT ON</span>
              <br />
              <span className="opacity-30">PRECISION.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-[color:var(--secondary)]">
              From a small unit in Pune to a full-scale MIDC facility, Vishwaraj Polychem has
              spent {siteConfig.yearsInBusiness}+ years engineering packaging solutions that
              protect critical manufactured goods across India.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Scrolling Accent Strip ────────────────────────────── */}
      <div className="py-10 border-y border-border bg-white overflow-hidden">
        <div className="scrolling-wrapper items-center gap-20 opacity-25">
          {["Established 1999", "MIDC Pune", "EPE Foam", "Bubble Film", "25+ Years", "ISO Quality", "Custom Conversion"].map((word) => (
            <div key={word} className="text-2xl font-extrabold tracking-[0.3em] text-primary uppercase font-heading shrink-0">{word}</div>
          ))}
          {["Established 1999", "MIDC Pune", "EPE Foam", "Bubble Film", "25+ Years", "ISO Quality", "Custom Conversion"].map((word) => (
            <div key={`${word}-dup`} className="text-2xl font-extrabold tracking-[0.3em] text-primary uppercase font-heading shrink-0">{word}</div>
          ))}
        </div>
      </div>

      {/* ── Our Mission Narrative ─────────────────────────────── */}
      <section className="py-24 sm:py-32 px-6 lg:px-12 bg-white">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-[0.42fr_0.58fr] items-start">
          <Reveal>
            <div>
              <div className="text-xs font-semibold tracking-[0.25em] text-[#F97316] uppercase font-mono">Our Mission</div>
              <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-primary leading-[1.1]">
                Over two decades of precision protection engineering.
              </h2>

              {/* Stat pills */}
              <div className="mt-12 grid grid-cols-2 gap-4">
                {[
                  { number: `${siteConfig.yearsInBusiness}+`, label: "Years in Business" },
                  { number: "1999", label: "Year Founded" },
                  { number: "MIDC", label: "Certified Facility" },
                  { number: "∞", label: "Custom Solutions" },
                ].map(({ number, label }) => (
                  <div key={label} className="rounded-2xl border border-border bg-[#F8F9FA] p-5">
                    <div className="text-3xl font-black text-[#F97316]">{number}</div>
                    <div className="mt-1 text-xs font-semibold tracking-wider text-secondary uppercase">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-7 text-lg leading-9 text-secondary">
              <p>{siteConfig.description}</p>
              {siteConfig.aboutText !== siteConfig.description && (
                <p>{siteConfig.aboutText}</p>
              )}
              <div className="mt-10 rounded-[2rem] border border-[rgba(249,115,22,0.18)] bg-[rgba(249,115,22,0.03)] p-7">
                <div className="text-xs font-semibold tracking-[0.2em] text-secondary uppercase font-mono mb-4">Our Strengths</div>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.strengths.map((strength) => (
                    <span
                      key={strength}
                      className="rounded-full border border-border bg-white px-4 py-1.5 text-xs font-semibold text-primary shadow-sm"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Manufacturing & Quality ──────────────────────────── */}
      <section className="py-24 sm:py-28 px-6 lg:px-12 bg-[#F3F4F6] border-y border-border">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-xs font-semibold tracking-[0.25em] text-[color:var(--secondary)] uppercase font-mono mb-4">Capability & Standards</div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary mb-16">
              Engineering Meets Quality.
            </h2>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal className="rounded-[2rem] border border-border bg-white p-8 shadow-[0_20px_50px_rgba(17,24,39,0.03)]">
              <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-secondary uppercase font-mono mb-6">
                <Layers className="h-4 w-4 text-[#F97316]" />
                Manufacturing Capability
              </div>
              <p className="text-base leading-8 text-secondary">
                Our Talawade facility operates advanced technological tools to develop custom EPE foam
                block fitments, die-cut buffers, and laminated air bubble pouch assemblies. Through
                precise thermal control, we achieve flexible yet high-load retaining cellular structures
                designed for automotive spare parts and static-sensitive electronic systems.
              </p>
              <div className="mt-8">
                <div className="relative overflow-hidden rounded-2xl aspect-[16/8]">
                  <Image
                    src="/images/banner1.jpg"
                    alt="Manufacturing facility"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-[10px] font-bold tracking-[0.2em] text-white uppercase font-mono">
                    Talawade MIDC, Pune
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="rounded-[2rem] border border-border bg-white p-8 shadow-[0_20px_50px_rgba(17,24,39,0.03)]">
              <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-secondary uppercase font-mono mb-6">
                <Trophy className="h-4 w-4 text-[#F97316]" />
                Quality Standards
              </div>
              {siteConfig.qualityPolicy?.statement && (
                <p className="text-base leading-8 text-secondary mb-6">
                  {siteConfig.qualityPolicy.statement}
                </p>
              )}
              <div className="grid gap-2">
                {siteConfig.qualityPolicy?.principles?.map((principle) => (
                  <div
                    key={principle}
                    className="rounded-xl border border-border bg-[#F8F9FA] px-4 py-3 text-xs font-semibold text-primary uppercase font-mono flex items-center gap-3"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F97316] shrink-0" />
                    {principle}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Vision ────────────────────────────────────────────── */}
      {siteConfig.vision.length > 0 && (
        <section className="py-24 sm:py-28 px-6 lg:px-12 bg-white">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="text-xs font-semibold tracking-[0.25em] text-[#F97316] uppercase font-mono mb-4">Vision & Leadership</div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary mb-16">
                Packaging Leadership.
              </h2>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2">
              {siteConfig.vision.map((item, index) => (
                <Reveal key={index} delay={index * 0.06}>
                  <div className="rounded-[2rem] border border-border bg-[#F8F9FA] hover:bg-white hover:border-[rgba(249,115,22,0.3)] transition-all duration-300 p-8 shadow-sm hover:shadow-md flex gap-5 items-start">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-black text-[#F97316] shadow border border-border shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-base leading-8 text-secondary">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Corporate Registration ────────────────────────────── */}
      <section className="py-24 sm:py-28 px-6 lg:px-12 bg-[#F3F4F6] border-t border-border">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-xs font-semibold tracking-[0.25em] text-secondary uppercase font-mono mb-4">Registration & Governance</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary mb-12">
              Official Corporate Details.
            </h2>
          </Reveal>

          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {(
                [
                  [CalendarDays, "Established", String(siteConfig.foundedYear)],
                  [ShieldCheck, "Incorporated", String(siteConfig.incorporatedYear)],
                  [MapPinned, "Headquarters", `${siteConfig.headquarters.city}, ${siteConfig.headquarters.state}`],
                  [Users, "Company Type", siteConfig.companyType],
                ] as const
              ).map(([Icon, label, value]) => (
                <div key={label} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <Icon className="h-5 w-5 text-[#F97316]" />
                  <div className="mt-4 text-[10px] font-bold tracking-[0.2em] text-secondary uppercase font-mono">{label}</div>
                  <div className="mt-1 text-base font-bold text-primary">{value}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-border bg-white p-6 shadow-sm">
              <Building2 className="h-5 w-5 text-[#F97316]" />
              <div className="mt-4 text-[10px] font-bold tracking-[0.2em] text-secondary uppercase font-mono">Corporate Identity Number (CIN)</div>
              <div className="mt-1 text-base font-mono font-bold text-primary tracking-wide">{siteConfig.cin}</div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
