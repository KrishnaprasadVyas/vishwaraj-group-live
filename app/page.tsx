import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ProductExplorer } from "@/components/product-explorer";
import { ProcessTimeline } from "@/components/process-timeline";
import { AboutOverview } from "@/components/about-overview";
import { IndustriesPreview } from "@/components/industries-preview";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ClientShowcase } from "@/components/client-showcase";

export const metadata = {
  title: "Vishwaraj Polychem | Enterprise Protective Packaging",
  description:
    "Premium protective packaging materials and precision foam conversion solutions for global manufacturing, automotive, electronics, and industrial supply chains.",
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">

      {/* Cinematic Hero */}
      <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden pt-32 px-6 lg:px-12 bg-primary">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_factory.png"
            alt="Advanced manufacturing facility"
            fill
            className="object-cover opacity-40 mix-blend-overlay hover:scale-105 transition-transform duration-[20s] ease-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary/95"></div>

          {/* Engineering grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="container-shell relative z-10 flex flex-col justify-center min-h-[75vh]">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2.5 shadow-sm mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="caption-text text-white">Global Manufacturing Operations • Pune</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="display-xl text-white mb-8">
              PRECISION<br />
              <span className="text-white/40">ENGINEERED.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="body-large text-zinc-300 md:w-3/5 lg:w-1/2 mb-12">
              We design and manufacture premium protective packaging systems—delivering
              molecular-level precision and unmatched thermal resistance for the world's
              most demanding industrial supply chains.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-4">
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-3 bg-accent text-white font-bold text-sm tracking-[0.15em] px-10 py-5 transition-all duration-300 rounded-full uppercase premium-shadow magnetic-hover hover:bg-white hover:text-primary"
              >
                Explore Solutions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary font-bold text-sm tracking-[0.15em] px-10 py-5 transition-all duration-300 rounded-full uppercase premium-shadow magnetic-hover hover:bg-accent hover:text-white"
              >
                Request Consultation
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="caption-text text-white">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-white/30 overflow-hidden">
            <div className="w-full h-1/2 bg-white animate-[scrollDown_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* 2. About Vishwaraj */}
      <AboutOverview />

      {/* 3. Engineering Workflow */}
      <ProcessTimeline />

      {/* 4. Products */}
      <ProductExplorer />

      {/* 5. Industries Served */}
      <IndustriesPreview preview={true} />

      {/* 6. Why Choose Vishwaraj */}
      <WhyChooseUs preview={true} />

      {/* 7. Clients */}
      <ClientShowcase preview={true} />

      {/* 9. Final CTA */}
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

