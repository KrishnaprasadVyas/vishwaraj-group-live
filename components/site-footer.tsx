import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

import { cleanContactDetails, footerLinks, productGroups, siteConfig } from "@/lib/content";

export function SiteFooter() {
  const primaryAddress = cleanContactDetails.addresses?.[0];
  const primaryPhone = cleanContactDetails.phoneNumbers?.[0];
  const primaryEmail = cleanContactDetails.emails?.[0];
  const secondaryEmail = cleanContactDetails.emails?.[1];

  return (
    <footer className="border-t border-white/10 bg-primary text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <div className="relative h-10 w-10 rounded-full overflow-hidden bg-white border border-white/20 shadow-sm">
                <Image
                  src="/images/logo.png"
                  alt="Vishwaraj Polychem logo"
                  fill
                  className="object-contain p-0.5"
                  sizes="40px"
                />
              </div>
              <span className="flex flex-col leading-tight">
                <span className="text-xs font-bold tracking-[0.18em] text-white uppercase">
                  Vishwaraj Polychem
                </span>
                <span className="text-[10px] text-zinc-400">Private Limited</span>
              </span>
            </Link>

            <p className="text-sm leading-7 text-zinc-400 max-w-sm">
              Premium protective packaging materials, EPE foam conversion, and industrial
              packaging solutions for demanding manufacturing environments since 1999.
            </p>

            <div className="grid gap-3 text-sm text-zinc-400">
              {primaryAddress && (
                <div className="flex gap-3 items-start">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="leading-6">{primaryAddress.fullAddress}</span>
                </div>
              )}
              {primaryPhone && (
                <a href={`tel:${primaryPhone.number}`} className="flex gap-3 items-center hover:text-white transition-colors">
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  <span>{primaryPhone.formatted ?? primaryPhone.number}</span>
                </a>
              )}
              {primaryEmail && (
                <a href={`mailto:${primaryEmail.email}`} className="flex gap-3 items-center hover:text-white transition-colors">
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  <span>{primaryEmail.email}</span>
                </a>
              )}
              {secondaryEmail && (
                <a href={`mailto:${secondaryEmail.email}`} className="flex gap-3 items-center hover:text-white transition-colors">
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  <span>{secondaryEmail.email}</span>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-[10px] font-bold tracking-[0.22em] text-zinc-500 uppercase mb-5">Quick Links</div>
            <div className="grid gap-3 text-sm">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-zinc-400 transition hover:text-white hover:translate-x-0.5 inline-flex items-center gap-1.5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="text-[10px] font-bold tracking-[0.22em] text-zinc-500 uppercase mb-5">Product Lines</div>
            <div className="grid gap-3 text-sm">
              {productGroups.slice(0, 6).map((group) => (
                <Link
                  key={group.slug}
                  href={`/products#${group.slug}`}
                  className="text-zinc-400 transition hover:text-white"
                >
                  {group.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA column */}
          <div>
            <div className="text-[10px] font-bold tracking-[0.22em] text-zinc-500 uppercase mb-5">Get In Touch</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
              <p className="text-sm leading-6 text-zinc-400">
                Need protective packaging for your manufacturing line? Our engineering team is ready to help.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-bold tracking-wider text-white uppercase shadow-[0_10px_24px_rgba(224,90,0,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(224,90,0,0.38)] magnetic-hover"
              >
                Request Quote
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* CIN */}
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-[9px] font-bold tracking-[0.2em] text-zinc-500 uppercase font-mono">CIN</div>
              <div className="mt-1 text-[11px] font-mono text-zinc-400 tracking-wide break-all">{siteConfig.cin}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-8">
          <span>© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</span>
          <span>Established {siteConfig.foundedYear} · Talawade MIDC, Pune, Maharashtra, India</span>
        </div>
      </div>
    </footer>
  );
}
