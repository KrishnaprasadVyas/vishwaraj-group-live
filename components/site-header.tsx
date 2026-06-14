"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

import { footerLinks, headerLinks, productGroups } from "@/lib/content";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "mt-3" : "mt-6"
        } mx-auto w-[92%] max-w-7xl`}
      >
        <div
          className={`flex items-center justify-between gap-4 px-5 py-3 rounded-full border transition-all duration-500 ${
            scrolled
              ? "bg-white/95 backdrop-blur-3xl border-border/70 shadow-[0_20px_50px_rgba(17,24,39,0.08),0_1px_3px_rgba(17,24,39,0.02)]"
              : "bg-white/80 backdrop-blur-2xl border-border/60 shadow-[0_20px_50px_rgba(17,24,39,0.05),0_1px_3px_rgba(17,24,39,0.01)]"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="relative h-9 w-9 rounded-full overflow-hidden bg-white border border-border shadow-sm">
              <Image
                src="/images/logo.png"
                alt="Vishwaraj Polychem logo"
                fill
                className="object-contain p-0.5"
                sizes="36px"
              />
            </div>
            <span className="flex flex-col leading-tight">
              <span className="text-[11px] font-bold tracking-[0.18em] text-primary uppercase">
                Vishwaraj Polychem
              </span>
              <span className="text-[9px] text-secondary">Protective Packaging</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {headerLinks.slice(0, 2).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wider uppercase transition hover:bg-black/5 hover:text-accent ${
                    isActive ? "text-accent bg-black/3" : "text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Products mega-menu */}
            <div className="group relative">
              <Link
                href="/products"
                className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-xs font-semibold tracking-wider uppercase transition hover:bg-black/5 hover:text-accent ${
                  pathname.startsWith("/products") ? "text-accent bg-black/3" : "text-primary"
                }`}
              >
                Products
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-1/2 top-full z-20 mt-4 w-[min(820px,calc(100vw-4rem))] -translate-x-1/2 translate-y-2 rounded-[2rem] border border-border bg-white/98 backdrop-blur-2xl p-5 opacity-0 shadow-[0_30px_70px_rgba(17,24,39,0.12)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="mb-3 text-[10px] font-bold tracking-[0.22em] text-secondary uppercase font-mono px-1">
                  Product Categories
                </div>
                <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
                  {productGroups.map((group) => (
                    <Link
                      key={group.slug}
                      href={`/products#${group.slug}`}
                      className="rounded-2xl border border-border/70 bg-[#F8F9FA] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(249,115,22,0.35)] hover:bg-white hover:shadow-[0_12px_28px_rgba(17,24,39,0.06)]"
                    >
                      <div className="text-[9px] font-semibold tracking-[0.2em] text-secondary uppercase font-mono">
                        Category
                      </div>
                      <div className="mt-1 text-sm font-bold text-primary">{group.name}</div>
                      <div className="mt-1 text-[11px] text-secondary">
                        {group.products.length} products
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {headerLinks.slice(3).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wider uppercase transition hover:bg-black/5 hover:text-accent ${
                    isActive ? "text-accent bg-black/3" : "text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-xs font-bold tracking-wider text-white uppercase shadow-[0_12px_24px_rgba(249,115,22,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(249,115,22,0.28)]"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex cursor-pointer items-center justify-center rounded-full border border-border bg-white p-2.5 text-primary shadow-sm transition hover:border-[rgba(249,115,22,0.35)] lg:hidden"
          >
            {mobileOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </header>

      {/* Mobile nav panel */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        {/* Slide panel */}
        <div
          className={`absolute top-[5.5rem] left-4 right-4 rounded-[2rem] border border-border bg-white/98 backdrop-blur-2xl p-5 shadow-[0_24px_50px_rgba(17,24,39,0.12)] transition-all duration-300 ${
            mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="flex flex-col gap-1">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-3 text-sm font-semibold tracking-wider uppercase transition hover:bg-black/5 hover:text-accent ${
                  pathname === link.href ? "text-accent" : "text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-border/50 bg-[#F8F9FA] p-4">
            <div className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase font-mono mb-3">
              Product Categories
            </div>
            <div className="grid gap-1.5 sm:grid-cols-2">
              {productGroups.map((group) => (
                <Link
                  key={group.slug}
                  href={`/products#${group.slug}`}
                  className="rounded-xl px-3 py-2 text-xs font-medium text-primary transition hover:bg-white hover:text-accent hover:shadow-sm"
                >
                  {group.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <Link
              href="/contact"
              className="block w-full rounded-full bg-accent py-3 text-center text-xs font-bold tracking-wider text-white uppercase shadow-[0_12px_24px_rgba(249,115,22,0.22)]"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
