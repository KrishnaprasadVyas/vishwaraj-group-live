import type { Metadata } from "next";

import { globalSeo, siteConfig } from "@/lib/content";

export const SITE_URL = globalSeo.canonicalUrl.replace(/\/$/, "");
export const SITE_NAME = siteConfig.companyName;
export const DEFAULT_OG_IMAGE = "/og-image.svg";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  keywords,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path === "/" ? "/" : `/${path.replace(/^\/|\/$/g, "")}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: "website",
      url: canonicalPath,
      title,
      description,
      siteName: siteConfig.seo.openGraph.siteName,
      locale: siteConfig.seo.openGraph.locale,
      images: [{ url: image, alt: `${title} — ${SITE_NAME}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path.startsWith("/") ? path : `/${path}`}`;
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
