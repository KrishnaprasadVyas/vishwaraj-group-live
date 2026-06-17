"use client";

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ClientShowcase({ preview = false }: { preview?: boolean }) {
  const allLogos = Array.from({ length: 22 }, (_, i) => i + 1);
  const displayLogos = preview ? allLogos.slice(0, 8) : allLogos;

  return (
    <section className="py-16 px-6 lg:px-12 bg-[#F8F9FA] border-y border-border">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight text-primary">
              Our Esteemed Clients
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayLogos.map((i) => (
            <Reveal key={i} delay={(i % 8) * 0.05}>
              <div className="bg-white rounded-[1.5rem] border border-border p-6 h-36 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[rgba(249,115,22,0.2)]">
                <div className="relative w-full h-full max-h-[80px] max-w-[140px] flex items-center justify-center">
                  <Image
                    src={`/images/clients/${i}.png`}
                    alt={`Client logo ${i}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {preview && (
          <Reveal delay={0.4}>
            <div className="mt-12 flex justify-center">
              <Link
                href="/clients"
                className="group inline-flex items-center justify-center gap-3 bg-white border border-border text-primary font-bold text-sm tracking-[0.15em] px-8 py-4 transition-all duration-300 rounded-full uppercase hover:border-[rgba(249,115,22,0.35)] hover:shadow-lg hover:text-accent"
              >
                View All Clients
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
