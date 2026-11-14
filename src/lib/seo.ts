import type { Metadata } from "next";
import { imageDimensions } from "./images";
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://haloworks.ae"
).replace(/\/$/, "");
export const absoluteUrl = (path = "/") => `${siteUrl}${path}`;
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = "hero-natural",
  article = false,
): Metadata {
  const fullTitle = `${title} | Halo Works`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      siteName: "Halo Works",
      locale: "en_AE",
      type: article ? "article" : "website",
      images: [
        {
          url: absoluteUrl(`/images/${image}.webp`),
          ...imageDimensions(image),
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(`/images/${image}.webp`)],
    },
  };
}
export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: "Halo Works",
  legalName: "Halo Works LLC-FZ",
  url: siteUrl,
  logo: absoluteUrl("/halo-works-wordmark.webp"),
  image: absoluteUrl("/images/hero-courtyard.webp"),
  description:
    "Interior fit-out company in Dubai for villa and apartment renovation, office fit-out, bespoke joinery, restaurant and retail interiors, with design and approval coordination.",
  email: "info@haloworks.ae",
  telephone: "+971566442008",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: { "@type": "City", name: "Dubai" },
  parentOrganization: {
    "@type": "Organization",
    name: "Halo Interiors",
    url: "https://halo.ae/",
  },
};
