"use server";

type LeadFormState = {
  success: boolean;
  message: string;
};

export async function submitLeadForm(
  _prevState: LeadFormState,
  _formData: FormData
): Promise<LeadFormState> {
  return {
    success: true,
    message: "Merci, votre demande a bien été reçue."
  };
}
