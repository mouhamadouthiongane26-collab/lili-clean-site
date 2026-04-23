import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky">
        Page introuvable
      </p>
      <h1 className="mt-5 font-heading text-5xl text-ocean">Cette page n’existe pas.</h1>
      <p className="mt-6 text-base leading-8 text-ink/72">
        Le contenu demandé a peut-être changé. Vous pouvez revenir à l’accueil ou
        consulter la page services.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="btn-primary">
          Retour a l’accueil
        </Link>
        <Link href="/services" className="btn-secondary">
          Voir les services
        </Link>
      </div>
    </section>
  );
}
