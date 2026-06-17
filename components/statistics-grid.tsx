"use client";

import { Reveal } from "@/components/reveal";

export function StatisticsGrid() {
  return (
    <section className="py-16 px-6 lg:px-12 bg-white">
      <div className="mx-auto max-w-7xl grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Reveal delay={0.1}>
          <div className="h-full flex flex-col items-center justify-center rounded-[1.5rem] border border-border bg-[#F8F9FA] p-6 text-center">
            <div className="text-3xl font-extrabold text-primary mb-1">25+</div>
            <div className="text-sm font-semibold tracking-wider text-secondary uppercase">Years Experience</div>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="h-full flex flex-col items-center justify-center rounded-[1.5rem] border border-border bg-[#F8F9FA] p-6 text-center">
            <div className="text-3xl font-extrabold text-primary mb-1">35+</div>
            <div className="text-sm font-semibold tracking-wider text-secondary uppercase">Products Engineered</div>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="h-full flex flex-col items-center justify-center rounded-[1.5rem] border border-border bg-[#F8F9FA] p-6 text-center">
            <div className="text-3xl font-extrabold text-primary mb-1">22+</div>
            <div className="text-sm font-semibold tracking-wider text-secondary uppercase">Trusted Clients</div>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="h-full flex flex-col items-center justify-center rounded-[1.5rem] border border-border bg-[#F8F9FA] p-6 text-center">
            <div className="text-3xl font-extrabold text-primary mb-1">7+</div>
            <div className="text-sm font-semibold tracking-wider text-secondary uppercase">Industries Served</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
