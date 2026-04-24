import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileStickyBar } from "@/components/mobile-sticky-bar";
import { company } from "@/lib/data";
import { getSiteUrl } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: `${company.name} | Nettoyage a ${company.city}`,
    template: `%s | ${company.name}`
  },
  description: company.tagline,
  applicationName: company.name,
  keywords: [
    "entreprise de nettoyage",
    "nettoyage domicile",
    "nettoyage airbnb",
    "nettoyage vitres",
    company.city
  ],
  openGraph: {
    title: `${company.name} | Nettoyage a ${company.city}`,
    description: company.tagline,
    type: "website",
    locale: "fr_FR",
    url: "/"
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Nettoyage a ${company.city}`,
    description: company.tagline
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
      <meta name="google-site-verification" content="h4eQzHlWYYbKbqGJub_cs11O-P6iaAfCcON2_s6KyZQ" />
      </head>
      <body className="text-ink">
        <Header />
        <main className="pb-24 sm:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
