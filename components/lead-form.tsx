const googleFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdpfoJHwwbePVMmTyojNW4plv3hPi-GFVslqy3d11A28eMDRw/viewform?embedded=true";

export function LeadForm() {
  return (
    <section
      id="devis"
      className="quote-form-target mx-auto my-10 w-full max-w-[800px] rounded-[1.75rem] border border-ocean/10 bg-mist p-4 shadow-xl sm:my-14 sm:p-6"
    >
      <div className="overflow-hidden rounded-[1.5rem] border border-ocean/10 bg-white shadow-soft">
        <div className="bg-sky px-6 py-5 text-white">
          <h2 className="font-heading text-3xl sm:text-4xl">Demande de devis</h2>
          <p className="mt-2 text-sm leading-6 text-white/90">
            Remplissez le formulaire ci-dessous, nous vous répondrons rapidement.
          </p>
        </div>

        <div className="bg-[rgba(47,143,70,0.06)] p-3 sm:p-4">
          <div className="overflow-hidden rounded-2xl border border-ocean/10 bg-white p-2 shadow-lg sm:p-3">
            <iframe
              src={googleFormUrl}
              title="Demande de devis"
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
