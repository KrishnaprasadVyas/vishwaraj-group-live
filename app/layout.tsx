import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FloatingActions } from "@/components/floating-actions";
import { EmailModalProvider } from "@/components/email-modal-provider";
import { Analytics } from "@/components/analytics";
import { JsonLd } from "@/components/json-ld";
import { cleanContactDetails, globalSeo, siteConfig } from "@/lib/content";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo";
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
  applicationName: siteConfig.companyName,
  category: "Industrial Manufacturing",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
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
    images: [{
      url: DEFAULT_OG_IMAGE,
      width: 1200,
      height: 630,
      alt: `${siteConfig.companyName} protective packaging solutions`,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: globalSeo.title,
    description: globalSeo.description,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const address = cleanContactDetails.addresses[0];
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: siteConfig.companyName,
    alternateName: siteConfig.alternateNames,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    foundingDate: siteConfig.foundedYear,
    address: {
      "@type": "PostalAddress",
      streetAddress: [address?.line1, address?.line2].filter(Boolean).join(", "),
      addressLocality: address?.city ?? siteConfig.headquarters.city,
      addressRegion: address?.state ?? siteConfig.headquarters.state,
      postalCode: address?.pincode,
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
        email: "vishwarajppl18@gmail.com",
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
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteConfig.companyName,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };

  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full">
        <JsonLd id="global-organization-schema" data={organizationJsonLd} />
        <JsonLd id="global-website-schema" data={websiteJsonLd} />
        <EmailModalProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <FloatingActions />
            <SiteFooter />
          </div>
        </EmailModalProvider>
        <Analytics />
      </body>
    </html>
  );
}
