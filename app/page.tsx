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
import { HeroSlideshow } from "@/components/hero-slideshow";

export const metadata = {
  title: "Vishwaraj Polychem | Enterprise Protective Packaging",
  description:
    "Premium protective packaging materials and precision foam conversion solutions for global manufacturing, automotive, electronics, and industrial supply chains.",
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">

      {/* Cinematic Hero Slideshow */}
      <HeroSlideshow />

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

