import type { MetadataRoute } from "next";

import { getStaticPathList } from "@/lib/content";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...getStaticPathList(), "/clients"].map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    changeFrequency: path.startsWith("/products/") ? "monthly" : "weekly",
    priority: path === "/" ? 1 : path.startsWith("/products/") ? 0.7 : 0.8,
  }));
}
