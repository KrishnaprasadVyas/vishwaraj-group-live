import type { MetadataRoute } from "next";

import { globalSeo } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${globalSeo.canonicalUrl.replace(/\/$/, "")}/sitemap.xml`,
  };
}
