const tallyFormUrl = "https://tally.so/embed/ZjG6ky";

export function LeadForm() {
  return (
    <section
      id="devis"
      className="quote-form-target mx-auto my-14 w-full max-w-[900px] px-4 sm:my-20 sm:px-6"
    >
      <div className="overflow-hidden rounded-xl border border-[#1F5E3B]/10 bg-white shadow-soft">
        <div className="border-b border-[#1F5E3B]/10 bg-[#FF2D7A] px-5 py-6 text-center text-white sm:px-8">
          <h2 className="font-heading text-3xl leading-tight sm:text-4xl">
            Demande de devis gratuite
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/95 sm:text-base">
            Remplissez ce formulaire, nous vous répondrons rapidement.
          </p>
        </div>

        <div className="bg-[#1F5E3B]/[0.06] p-3 sm:p-5">
          <div className="overflow-hidden rounded-xl border border-[#1F5E3B]/10 bg-white shadow-lg">
            <iframe
              src={tallyFormUrl}
              title="Demande de devis LiliCleanServices"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="block min-h-[800px] w-full border-0 bg-white"
            >
              Chargement…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
