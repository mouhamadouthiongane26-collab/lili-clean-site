const googleFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdpfoJHwwbePVMmTyojNW4plv3hPi-GFVslqy3d11A28eMDRw/viewform?embedded=true";

export function LeadForm() {
  return (
    <section className="mx-auto my-8 w-full max-w-[800px] space-y-6 overflow-hidden sm:my-12">
      <div className="space-y-2 text-center">
        <h2 className="font-heading text-3xl text-ocean sm:text-4xl">
          Demande de devis
        </h2>
        <p className="text-sm leading-6 text-ink/70">
          Remplissez le formulaire ci-dessous, nous vous répondrons rapidement.
        </p>
      </div>

      <div className="w-full overflow-hidden rounded-2xl border border-ocean/10 bg-white shadow-soft">
        <iframe
          src={googleFormUrl}
          title="Demande de devis"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="block min-h-[800px] w-full border-0"
        >
          Chargement…
        </iframe>
      </div>
    </section>
  );
}
