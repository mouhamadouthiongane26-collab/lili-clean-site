const tallyFormUrl = "https://tally.so/r/ZjG6ky";

export function LeadForm() {
  return (
    <section
      id="devis"
      className="quote-form-target mx-auto my-14 w-full max-w-[900px] px-4 sm:my-20 sm:px-6"
    >
      <div className="overflow-hidden rounded-xl border border-[#1F5E3B]/10 bg-white shadow-soft">
        <div className="border-b border-[#1F5E3B]/10 bg-[#FF2D7A] px-5 py-8 text-center text-white sm:px-8">
          <h2 className="font-heading text-3xl leading-tight sm:text-4xl">
            Demande de devis
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/95 sm:text-base">
            Cliquez ci-dessous pour accéder à notre formulaire de demande de devis
          </p>
        </div>

        <div className="bg-[#1F5E3B]/[0.06] px-5 py-10 text-center sm:px-8 sm:py-12">
          <div className="mx-auto max-w-2xl">
            <p className="text-base leading-8 text-ink/80">
              Le formulaire s’ouvre dans un nouvel onglet sécurisé. Aucune iframe
              ni script externe n’est chargé sur cette page.
            </p>
            <a
              href={tallyFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-7 inline-flex min-h-12 items-center justify-center px-8 text-center"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
