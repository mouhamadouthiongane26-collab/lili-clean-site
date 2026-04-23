import type { MetadataRoute } from "next";

import { services } from "@/lib/data";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const routes = [
    "/",
    "/services",
    "/a-propos",
    "/contact",
    "/devis",
    "/mentions-legales",
    "/politique-de-confidentialite"
  ];

  return [
    ...routes.map((route) => ({
      url: new URL(route, baseUrl).toString(),
      changeFrequency: "weekly" as const,
      priority: route === "/" ? 1 : 0.7
    })),
    ...services.map((service) => ({
      url: new URL(`/services/${service.slug}`, baseUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
