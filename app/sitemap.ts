import type { MetadataRoute } from "next";

import { allProducts, globalSeo } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = globalSeo.canonicalUrl.replace(/\/$/, "");

  return [
    "",
    "/about",
    "/products",
    "/industries",
    "/contact",
    ...allProducts.map((product) => `/products/${product.slug}`),
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/products/") ? "monthly" : "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
