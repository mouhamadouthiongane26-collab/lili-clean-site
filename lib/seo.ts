import type { Metadata } from "next";

const fallbackUrl = "http://localhost:3000";

export function getSiteUrl() {
  return new URL(process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl);
}

export function buildMetadata({
  title,
  description,
  path = "/"
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = new URL(path, getSiteUrl());

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      locale: "fr_FR",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
