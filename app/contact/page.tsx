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
      <section className="relative overflow-hidden bg-[#F8F9FA] pt-36 pb-20 px-6 lg:px-12 border-b border-border">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-xs font-semibold tracking-[0.25em] text-[#F97316] uppercase font-mono mb-6">
              Get in Touch
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="massive-text text-primary leading-[0.88]">
              <span>LET'S</span>
              <br />
              <span className="opacity-30">CONNECT.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-secondary">
              Tell us what you need — our engineering team will respond with the right
              packaging path, prototype specs, or bulk quote within 24 hours.
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.019!2d73.7701!3d18.6523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM5JzA4LjMiTiA3M8KwNDYnMTIuNCJF!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
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
      <section className="py-16 px-6 lg:px-12 bg-[#F3F4F6] border-t border-border">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-5 md:grid-cols-3">
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
                <div key={title} className="rounded-[2rem] border border-border bg-white p-7 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(249,115,22,0.08)] text-[#F97316] mb-5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2">{title}</h3>
                  <p className="text-sm leading-6 text-secondary">{desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
