import companyJson from "@/company.json";
import clientsJson from "@/clients.json";
import contactJson from "@/contact.json";
import industriesJson from "@/industries.json";
import navigationJson from "@/navigation.json";
import productsJson from "@/products.json";
import seoJson from "@/seo.json";

type RawProduct = {
  id: string;
  name: string;
  description: string;
  specifications?: Record<string, unknown>;
  applications?: string[];
  industryApplications?: string[];
  types?: string[];
  subProducts?: string[];
  categories?: string[];
  range?: string[];
  grades?: string[];
};

type RawProductCategory = {
  categoryName: string;
  products: RawProduct[];
};

type RawIndustry = {
  industry: string;
  applications?: string[];
  products?: string[];
};

const currentYear = new Date().getFullYear();

export const siteConfig = {
  companyName: companyJson.companyName,
  alternateNames: companyJson.alternateNames ?? [],
  foundedYear: companyJson.establishedYear,
  incorporatedYear: companyJson.incorporationYear,
  yearsInBusiness: Math.max(currentYear - companyJson.establishedYear, 0),
  companyType: companyJson.companyType,
  cin: companyJson.registrationDetails?.cin ?? "",
  headquarters: companyJson.headquarters,
  description: companyJson.description,
  aboutText: companyJson.aboutUs?.fullText ?? companyJson.description,
  strengths: (companyJson.aboutUs?.keyStrengths ?? []).filter(
    (strength: string) => !/high quality aluminum/i.test(strength),
  ),
  vision: companyJson.vision ?? [],
  qualityPolicy: companyJson.qualityPolicy,
  resources: companyJson.resources,
  keyPersonnel: companyJson.keyPersonnel,
  contact: contactJson,
  seo: seoJson,
  navigation: navigationJson,
  clients: clientsJson,
};

export const headerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatList(values: string[] | undefined) {
  return (values ?? []).filter(Boolean).filter((item) => !/^00\+/.test(item));
}

export const productGroups = (
  productsJson.categories as RawProductCategory[]
).map((category) => {
  const slug = slugify(category.categoryName);

  return {
    slug,
    name: category.categoryName,
    products: category.products.map((product) => ({
      ...product,
      slug: product.id,
      categorySlug: slug,
      categoryName: category.categoryName,
      applications: formatList(product.applications),
      industryApplications: formatList(product.industryApplications),
      types: formatList(product.types),
      subProducts: formatList(product.subProducts),
      categories: formatList(product.categories),
      range: formatList(product.range),
      grades: formatList(product.grades),
    })),
  };
});

export type ProductGroup = (typeof productGroups)[number];
export type Product = ProductGroup["products"][number];

export const allProducts = productGroups.flatMap((group) => group.products);

export const featuredProducts = productGroups
  .map((group) => group.products[0])
  .filter(Boolean)
  .slice(0, 6);

export const industries = (
  industriesJson.industriesServed as RawIndustry[]
).map((entry) => ({
  ...entry,
  slug: slugify(entry.industry),
  applications: formatList(entry.applications),
  products: formatList(entry.products),
}));

export const visibleClientTestimonials = (clientsJson.clients ?? []).filter(
  (client: { name?: string }) => !/anonymous client/i.test(client.name ?? ""),
);

export const cleanContactDetails = {
  companyName: contactJson.companyName,
  addresses: contactJson.addresses ?? [],
  phoneNumbers: contactJson.phoneNumbers ?? [],
  emails: contactJson.emails ?? [],
  website: contactJson.website,
  downloadOptions: contactJson.downloadOptions ?? [],
};

export const globalSeo = seoJson.globalSeo;

export function getProductBySlug(slug: string) {
  return allProducts.find((product) => product.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return productGroups.find((group) => group.slug === slug);
}

export function summarizeText(value: string, maxLength = 160) {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength).trimEnd()}…`;
}

export function displayYearsSinceFounded() {
  return `${siteConfig.yearsInBusiness}+ Years`;
}

export function getStaticPathList() {
  return [
    "/",
    "/about",
    "/products",
    "/industries",
    "/contact",
    ...allProducts.map((product) => `/products/${product.slug}`),
  ];
}

export function getProductImage(slug: string, categorySlug?: string): string {
  switch (slug) {
    case "air-bubble-film":
      return "/images/bubble-wrap-texture.png";
    case "2-layer-bubble-bags":
      return "/images/p12.png";
    case "3-layer-bubble-bags":
      return "/images/p13.png";
    case "bubble-with-woven-sack-laminated-bags-sheet":
      return "/images/p2.png";
    case "bubble-with-pe-foam-laminated-bags":
      return "/images/p3.png";
    case "bubble-with-aluminium-film-laminated-bags-sheet":
      return "/images/bubble-reflective-texture.png";
    case "antistatic-bubble-bags":
      return "/images/bubble-reflective-texture.png";
    case "bubble-with-kraft-paper-laminated-sheet":
      return "/images/p2.png";
    case "3d-bubble-bags":
      return "/images/vproduct3.jpg";

    case "epe-sheet-and-sheet-application":
      return "/images/epe-foam-texture.png";
    case "epe-sheet-rolls-and-sheet-applications":
      return "/images/epe_11.png";
    case "epe-foam-tube":
      return "/images/vproduct1.jpg";
    case "epe-foam-rod":
      return "/images/vproduct2.jpg";
    case "epe-polyethylene-foam":
      return "/images/epe-foam-texture.png";

    case "pu-foam-sheet":
      return "/images/epe_11.png"; // foam packaging trays
    case "crosslinked-foam":
      return "/images/p3.png"; // grey die-cut foam insert
    case "epdm-foam":
      return "/images/p2.png"; // dark grey rubber/EPDM foam roll
    case "xlpe-foam":
      return "/images/vproduct3.jpg"; // coloured foam tubes
    case "nitril-foam":
      return "/images/vproduct1.jpg"; // foam rolls & profiles

    case "stretch-film":
      return "/images/vproduct1.jpg";
    case "bopp-tapes":
      return "/images/vproduct3.jpg";

    case "export-packaging-items":
      return "/images/vproduct2.jpg";
    case "industrial-chemicals":
      return "/images/bubble-reflective-texture.png";

    case "gravity-die-casting":
    case "non-ferrous-die-casting":
    case "aluminum-die-casting":
    case "finished-components":
      return "/images/vproduct2.jpg";
    case "shell-core-casting":
    case "aluminum-footrest":
    case "cnc-components":
    case "vmc-components":
      return "/images/vproduct1.jpg";
    case "valve-casting":
    case "led-street-light-casting":
    case "gearbox-casting":
    case "manifold-die-casting":
      return "/images/vproduct3.jpg";

    default:
      if (categorySlug === "air-bubble-film") {
        return "/images/bubble-wrap-texture.png";
      } else if (categorySlug === "epe-foam") {
        return "/images/epe-foam-texture.png";
      } else if (
        categorySlug === "pu-foam" ||
        categorySlug === "crosslinked-foam" ||
        categorySlug === "epdm-foam" ||
        categorySlug === "xlpe-foam" ||
        categorySlug === "nitril-foam"
      ) {
        return "/images/epe_11.png";
      }
      return "/images/bubble-wrap-texture.png"; // generic fallback
  }
}
