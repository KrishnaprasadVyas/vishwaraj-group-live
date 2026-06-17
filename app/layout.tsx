import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { globalSeo, siteConfig } from "@/lib/content";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(globalSeo.canonicalUrl),
  title: {
    default: siteConfig.companyName,
    template: `%s | ${siteConfig.companyName}`,
  },
  description: globalSeo.description,
  keywords: globalSeo.keywords,
  authors: [{ name: globalSeo.author }],
  creator: globalSeo.author,
  publisher: globalSeo.publisher,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: globalSeo.title,
    description: globalSeo.description,
    siteName: siteConfig.seo.openGraph.siteName,
    locale: siteConfig.seo.openGraph.locale,
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: globalSeo.title,
    description: globalSeo.description,
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.companyName,
    alternateName: siteConfig.alternateNames,
    url: globalSeo.canonicalUrl,
    foundingDate: siteConfig.foundedYear,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gate No. 199, Behind Jyotiba Mandir, Jyotiba Nager MIDC, Talawade, Bhosari",
      addressLocality: siteConfig.headquarters.city,
      addressRegion: siteConfig.headquarters.state,
      postalCode: "411039",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9921053399",
        contactType: "sales",
        email: "vishwaraj99@rediffmail.com",
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-8999884602",
        contactType: "general",
        email: "info@vishwarajgroup.com",
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Protective packaging materials" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Industrial foam products" },
      },
    ],
  };

  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
