"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-[72px]">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8 flex h-full items-center justify-between">
          
          {/* Left: Logo Only */}
          <div className="flex flex-1 justify-start h-full items-center">
            <Link href="/" className="relative h-[48px] w-[260px] shrink-0 flex items-center">
              <Image
                src="/images/logo.png"
                alt="Vishwaraj Polychem logo"
                fill
                className="object-contain object-left"
                sizes="260px"
                priority
              />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center h-full text-[14px] font-semibold transition-colors duration-200 group ${
                    isActive ? "text-[#004080]" : "text-[#4B5563] hover:text-[#004080]"
                  }`}
                >
                  <span className="relative py-1">
                    {link.label}
                    {/* Thin blue underline positioned exactly as the reference */}
                    <span 
                      className={`absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#004080] transition-opacity duration-200 ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`} 
                    />
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right: Request Quote Button & Mobile Toggle */}
          <div className="flex flex-1 justify-end h-full items-center">
            <div className="hidden lg:block shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#E87A00] text-white text-[14px] font-semibold px-5 h-[40px] rounded-[4px] transition-colors duration-200 hover:bg-[#CC6A00]"
              >
                Request Quote
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="flex items-center justify-center p-2 text-slate-700 hover:text-[#004080] transition-colors lg:hidden ml-4"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav panel */}
      <div
        className={`fixed inset-0 z-40 bg-white lg:hidden transition-transform duration-300 pt-[70px] ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 overflow-y-auto h-full border-t border-gray-100">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[16px] font-semibold py-3 border-b border-gray-100 ${
                    isActive ? "text-[#004080]" : "text-[#4B5563]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="block w-full text-center bg-[#E87A00] text-white text-[15px] font-semibold px-6 h-[48px] leading-[48px] rounded-[4px] transition-colors hover:bg-[#CC6A00]"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
