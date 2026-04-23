type SiteImageAsset = {
  src: string;
  alt: string;
};

export const siteImages = {
  hero: {
    src: "/images/maison-propre 08.28.40.jpeg",
    alt: "Nettoyage maison et interieur propre pour site de service de nettoyage"
  },
  whyChoose: {
    src: "/images/femme-menage 08.29.06.jpeg",
    alt: "Femme de menage professionnelle pour prestation de nettoyage a domicile"
  },
  about: {
    src: "/images/hommes-menage.jpeg",
    alt: "Equipe de nettoyage professionnelle pour service de menage et entretien"
  },
  services: {
    src: "/images/materiels-image.jpeg",
    alt: "Materiel professionnel de nettoyage pour prestations d entretien et remise en etat"
  },
  servicesVisual: {
    src: "/images/salon propre.jpeg",
    alt: "Service de nettoyage professionnel"
  },
  results: [
    {
      src: "/images/avant-apres-1 08.29.08.jpeg",
      alt: "Avant apres nettoyage maison avec difference visible apres intervention"
    },
    {
      src: "/images/avant-apres-2.jpeg",
      alt: "Resultat avant apres nettoyage interieur pour service professionnel"
    }
  ]
} as const;

const serviceCardImages: Record<string, SiteImageAsset> = {
  "menage-a-domicile-regulier": {
    src: "/images/salon propre.jpeg",
    alt: "Salon propre apres une prestation de menage regulier"
  },
  "grand-nettoyage-nettoyage-de-printemps": {
    src: "/images/hommes-menage.jpeg",
    alt: "Nettoyage en profondeur d une cuisine par un professionnel"
  },
  "nettoyage-airbnb-courte-duree": {
    src: "/images/maison-propre 08.28.40.jpeg",
    alt: "Interieur propre prepare pour une location courte duree"
  },
  "nettoyage-apres-demenagement": {
    src: "/images/avant-apres-1 08.29.08.jpeg",
    alt: "Avant apres montrant la remise en ordre d un logement"
  },
  "nettoyage-des-vitres": {
    src: "/images/IMAGE.jpeg",
    alt: "Nettoyage de vitre par une professionnelle"
  },
  "repassage-a-domicile": {
    src: "/images/materiels 1 .jpeg",
    alt: "Materiel de nettoyage pour un service a domicile"
  }
};

export function getServiceCardImage(slug: string): SiteImageAsset {
  return serviceCardImages[slug] ?? siteImages.services;
}
