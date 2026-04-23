import { company } from "@/lib/data";
import { getSiteUrl } from "@/lib/seo";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    image: `${getSiteUrl()}opengraph-image`,
    telephone: company.phoneDisplay,
    email: company.email,
    areaServed: company.serviceAreaLabel,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressRegion: company.region,
      addressCountry: "FR"
    },
    url: getSiteUrl().toString(),
    description: company.tagline
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
