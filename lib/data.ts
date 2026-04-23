import type {
  CompanyInfo,
  FaqItem,
  ServiceItem,
  SiteSettings,
  Testimonial
} from "@/lib/types";
import { toWhatsAppNumber } from "@/lib/utils";

const rawPhone = "0628837818";

export const company: CompanyInfo = {
  name: "Lilicleanservices",
  legalName: "Lilicleanservices",
  city: "Saint-Julien-de-l'Escap",
  region: "Charente-Maritime",
  phoneDisplay: "06 28 83 78 18",
  phoneHref: `tel:${rawPhone}`,
  whatsappHref: `https://wa.me/${toWhatsAppNumber(rawPhone)}`,
  email: "lilicleanservices17@gmail.com",
  emailHref: "mailto:lilicleanservices17@gmail.com",
  tagline: "Nettoyage soigné, discret et fiable pour particuliers et professionnels.",
  heroTitle: "Un intérieur net, une prestation carrée, un service qui rassure.",
  heroSubtitle:
    "Lilicleanservices accompagne les particuliers, locations courte durée et petites structures professionnelles autour de Saint-Julien-de-l'Escap avec une approche simple : être ponctuel, méticuleux et facile à joindre.",
  responsePromise: "Réponse rapide pour vos demandes de devis et vos besoins urgents.",
  audience:
    "Prestations de nettoyage pour particuliers, hôtes Airbnb et professionnels locaux.",
  serviceArea:
    "Saint-Julien-de-l'Escap et les alentours, avec une approche locale et flexible selon le type de mission.",
  serviceAreaLabel: "Saint-Julien-de-l'Escap et alentours"
};

export const services: ServiceItem[] = [
  {
    slug: "menage-a-domicile-regulier",
    title: "Ménage à domicile régulier",
    shortTitle: "Ménage régulier",
    badge: "Particuliers",
    excerpt:
      "Un entretien fiable et régulier pour garder votre maison propre sans stress ni perte de temps.",
    intro:
      "Nous prenons en charge l'entretien courant de votre intérieur avec constance, discrétion et attention aux détails pour que votre maison reste agréable au quotidien.",
    benefits: [
      "Un logement entretenu avec régularité",
      "Une prestation adaptée à vos habitudes",
      "Un service sérieux pour gagner du temps chaque semaine"
    ],
    useCases: [
      "Entretien hebdomadaire ou bi-mensuel",
      "Nettoyage cuisine, salle de bain et pièces de vie",
      "Soutien pour les familles actives ou les personnes âgées"
    ],
    process: [
      "Échange rapide pour comprendre vos besoins",
      "Définition d'une fréquence et d'un périmètre clair",
      "Intervention régulière avec suivi simple"
    ],
    featured: true,
    metaDescription:
      "Service de ménage à domicile régulier à Saint-Julien-de-l'Escap pour garder un intérieur propre, sain et bien entretenu."
  },
  {
    slug: "grand-nettoyage-nettoyage-de-printemps",
    title: "Grand nettoyage / nettoyage de printemps",
    shortTitle: "Grand nettoyage",
    badge: "Remise en état",
    excerpt:
      "Une remise à niveau complète pour repartir sur une base propre, saine et lumineuse.",
    intro:
      "Quand un entretien classique ne suffit plus, nous réalisons un nettoyage plus approfondi pour redonner fraîcheur et clarté à votre intérieur.",
    benefits: [
      "Un résultat visuel immédiat",
      "Une intervention ciblée sur les zones oubliées",
      "Une maison assainie avant une nouvelle routine"
    ],
    useCases: [
      "Changement de saison",
      "Préparation avant réception ou événement",
      "Relance complète après une période chargée"
    ],
    process: [
      "Repérage des zones prioritaires",
      "Plan d'intervention pièce par pièce",
      "Nettoyage renforcé avec finitions"
    ],
    featured: true,
    metaDescription:
      "Grand nettoyage et nettoyage de printemps à Saint-Julien-de-l'Escap pour retrouver un intérieur propre et sain."
  },
  {
    slug: "nettoyage-airbnb-courte-duree",
    title: "Nettoyage Airbnb (courte durée)",
    shortTitle: "Nettoyage Airbnb",
    badge: "Location courte durée",
    excerpt:
      "Une remise en état rapide entre deux voyageurs, pensée pour les locations courte durée.",
    intro:
      "Nous intervenons pour vous aider à maintenir une présentation impeccable de votre logement et sécuriser une bonne première impression pour vos voyageurs.",
    benefits: [
      "Un logement prêt à accueillir rapidement",
      "Un niveau de propreté cohérent entre chaque séjour",
      "Une image plus professionnelle pour votre annonce"
    ],
    useCases: [
      "Rotation entre deux réservations",
      "Préparation avant arrivée de voyageurs",
      "Remise en état d'un logement meublé"
    ],
    process: [
      "Coordination simple avec vos disponibilités",
      "Checklist de remise en état",
      "Validation finale avant nouvelle arrivée"
    ],
    featured: true,
    metaDescription:
      "Nettoyage Airbnb et locations courte durée à Saint-Julien-de-l'Escap avec une remise en état rapide et soignée."
  },
  {
    slug: "nettoyage-apres-demenagement",
    title: "Nettoyage après déménagement",
    shortTitle: "Après déménagement",
    badge: "Ponctuel",
    excerpt:
      "Une intervention ponctuelle pour remettre un logement en ordre avant état des lieux, vente ou installation.",
    intro:
      "Après un départ ou avant une installation, nous assurons un nettoyage complet pour rendre le logement plus propre, plus net et plus présentable.",
    benefits: [
      "Un logement prêt à être rendu ou occupé",
      "Moins de charge mentale en fin de déménagement",
      "Un résultat plus propre dans les zones sensibles"
    ],
    useCases: [
      "Nettoyage avant état des lieux",
      "Préparation d'un logement avant emménagement",
      "Fin de location ou changement d'occupant"
    ],
    process: [
      "Évaluation du niveau de remise en état",
      "Traitement des surfaces et points de contact",
      "Contrôle final avant restitution"
    ],
    featured: true,
    metaDescription:
      "Nettoyage après déménagement à Saint-Julien-de-l'Escap pour un logement prêt à rendre ou à occuper."
  },
  {
    slug: "nettoyage-des-vitres",
    title: "Nettoyage des vitres",
    shortTitle: "Vitres",
    badge: "Finitions",
    excerpt:
      "Des vitrages plus nets pour apporter plus de lumière et une sensation de propreté immédiate.",
    intro:
      "Nous nettoyons les surfaces vitrées accessibles avec soin pour améliorer la clarté de vos pièces et la présentation générale du logement.",
    benefits: [
      "Des vitres plus transparentes et sans traces",
      "Plus de lumière naturelle",
      "Une finition visuelle très valorisante"
    ],
    useCases: [
      "Maison ou appartement",
      "Baies vitrées et fenêtres accessibles",
      "Entretien ponctuel ou complément d'une autre prestation"
    ],
    process: [
      "Repérage des surfaces vitrées",
      "Nettoyage des vitres et encadrements accessibles",
      "Finition pour un rendu net"
    ],
    featured: false,
    metaDescription:
      "Nettoyage des vitres à Saint-Julien-de-l'Escap pour un rendu lumineux, soigné et sans traces."
  },
  {
    slug: "repassage-a-domicile",
    title: "Repassage à domicile",
    shortTitle: "Repassage",
    badge: "Confort",
    excerpt:
      "Un service pratique pour alléger votre quotidien et garder votre linge prêt à l'emploi.",
    intro:
      "Nous proposons une prestation de repassage à domicile pensée pour vous faire gagner du temps et maintenir un niveau d'organisation confortable au quotidien.",
    benefits: [
      "Moins de charge domestique",
      "Un linge prêt plus rapidement",
      "Une prestation complémentaire simple à intégrer"
    ],
    useCases: [
      "Complément d'un ménage régulier",
      "Besoin ponctuel après une période chargée",
      "Aide au quotidien pour les foyers actifs"
    ],
    process: [
      "Validation du volume à traiter",
      "Organisation simple de la prestation",
      "Restitution du linge repassé et ordonné"
    ],
    featured: false,
    metaDescription:
      "Repassage à domicile à Saint-Julien-de-l'Escap pour gagner du temps et simplifier votre quotidien."
  }
];

export const featuredServices = services.filter((service) => service.featured);

export const testimonials: Testimonial[] = [
  {
    name: "Cliente à domicile",
    quote:
      "Intervention très sérieuse, logement impeccable après passage. Je recommande sans hésiter.",
    rating: 5,
    note: undefined,
    isEditorial: false
  },
  {
    name: "Particulier",
    quote:
      "Service rapide et efficace. La maison est parfaitement propre, travail de qualité.",
    rating: 5,
    note: undefined,
    isEditorial: false
  },
  {
    name: "Client satisfait",
    quote:
      "Très bon contact, personne ponctuelle et professionnelle. Résultat au rendez-vous.",
    rating: 5,
    note: undefined,
    isEditorial: false
  }
];

export const faq: FaqItem[] = [
  {
    question: "Quelles zones desservez-vous ?",
    answer:
      "Lilicleanservices intervient principalement à Saint-Julien-de-l'Escap et dans les alentours, selon la nature de la prestation et la disponibilité."
  },
  {
    question: "Le devis est-il gratuit ?",
    answer:
      "Oui, la demande de devis est gratuite. Vous pouvez nous écrire, appeler ou passer par le formulaire du site."
  },
  {
    question: "Travaillez-vous pour les particuliers et les professionnels ?",
    answer:
      "Oui. Le site est pensé pour les besoins des particuliers, des locations courte durée et des petites structures professionnelles."
  },
  {
    question: "Proposez-vous des prestations ponctuelles et régulières ?",
    answer:
      "Oui. Nous proposons aussi bien des interventions ponctuelles que des prestations récurrentes selon votre besoin."
  },
  {
    question: "Puis-je vous contacter rapidement par téléphone ou WhatsApp ?",
    answer:
      "Oui. Le site met en avant le téléphone et WhatsApp pour faciliter les demandes rapides, notamment sur mobile."
  },
  {
    question: "Sous quel délai répondez-vous ?",
    answer:
      "Nous visons une réponse rapide pour les demandes de devis et les prises de contact, avec un retour clair sur la faisabilité et le créneau souhaité."
  }
];

export const siteSettings: SiteSettings = {
  navItems: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "A propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
    { label: "Devis", href: "/devis" }
  ],
  footerNote:
    "Site vitrine en cours de lancement. Les témoignages et les mentions légales pourront être enrichis avant la mise en production finale."
};
