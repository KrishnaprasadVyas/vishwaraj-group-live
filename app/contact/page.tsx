import type { Metadata } from "next";
import { Mail, MapPinned, Phone, Clock, ArrowUpRight } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { cleanContactDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Vishwaraj Polychem Private Limited for protective packaging and EPE foam manufacturing inquiries. Located at Talawade MIDC, Pune, Maharashtra.",
};

export default function ContactPage() {
  const address = cleanContactDetails.addresses[0];
  const phoneNumbers = cleanContactDetails.phoneNumbers;
  const emails = cleanContactDetails.emails;

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
              Get in Touch
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Let's Connect.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-zinc-300">
              Tell us what you need — our engineering team will respond with the right packaging path, prototype specs, or bulk quote within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Contact Body ──────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[0.85fr_1.15fr] items-start">

          {/* Left: details panel */}
          <Reveal>
            <div className="space-y-5">
              {/* Details card */}
              <div className="rounded-[2rem] border border-border bg-white p-8 shadow-[0_22px_60px_rgba(17,24,39,0.05)]">
                <div className="text-xs font-semibold tracking-[0.22em] text-secondary uppercase font-mono mb-6">
                  Contact Details
                </div>

                <div className="grid gap-5">
                  {address ? (
                    <div className="flex gap-4 items-start">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[rgba(249,115,22,0.08)] text-[#F97316]">
                        <MapPinned className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold tracking-[0.18em] text-secondary uppercase font-mono mb-1">
                          Address
                        </div>
                        <p className="text-sm leading-7 text-primary">{address.fullAddress}</p>
                      </div>
                    </div>
                  ) : null}

                  {phoneNumbers.map((phone) => (
                    <a
                      key={phone.number}
                      href={`tel:${phone.number}`}
                      className="flex gap-4 items-start group"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[rgba(249,115,22,0.08)] text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-colors duration-300">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold tracking-[0.18em] text-secondary uppercase font-mono mb-1">
                          Phone
                        </div>
                        <div className="text-sm font-semibold text-primary group-hover:text-[#F97316] transition-colors">
                          {phone.formatted ?? phone.number}
                        </div>
                      </div>
                    </a>
                  ))}

                  {emails.map((email) => (
                    <a
                      key={email.email}
                      href={`mailto:${email.email}`}
                      className="flex gap-4 items-start group"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[rgba(249,115,22,0.08)] text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-colors duration-300">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold tracking-[0.18em] text-secondary uppercase font-mono mb-1">
                          Email
                        </div>
                        <div className="text-sm font-semibold text-primary group-hover:text-[#F97316] transition-colors break-all">
                          {email.email}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Hours card */}
              <div className="rounded-[2rem] border border-border bg-[#F8F9FA] p-8">
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white border border-border text-[#F97316]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.18em] text-secondary uppercase font-mono mb-2">
                      Business Hours
                    </div>
                    <div className="text-sm text-primary font-semibold">Mon – Sat: 9 AM – 6 PM IST</div>
                    <div className="text-xs text-secondary mt-1">Sunday: Closed</div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-[2rem] overflow-hidden border border-border shadow-sm aspect-[16/10] w-full relative">
                <iframe
                  title="Vishwaraj Polychem Location"
                  src="https://maps.google.com/maps?q=Vishwaraj+Polychem+Private+Limited,+Talawade,+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* ── Response Promise ─────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-12 bg-[#F8F9FA] border-t border-border">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Clock,
                  title: "24-Hour Response",
                  desc: "Our team reviews every inquiry within one business day.",
                },
                {
                  icon: ArrowUpRight,
                  title: "Direct to Engineers",
                  desc: "Your message reaches our technical team, not a call center.",
                },
                {
                  icon: Mail,
                  title: "Custom Quotes",
                  desc: "We prepare tailored packaging specifications and pricing.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="group h-full flex flex-col gap-4 rounded-[1.5rem] border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(249,115,22,0.35)] hover:shadow-[0_18px_40px_rgba(17,24,39,0.05)]">
                  <div className="w-12 h-12 rounded-full bg-[#F8F9FA] flex items-center justify-center border border-border group-hover:bg-accent/10 group-hover:border-accent/20 transition-colors">
                    <Icon className="h-5 w-5 text-secondary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">{title}</h3>
                    <p className="text-sm leading-6 text-secondary">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
