import { NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";

import { normalizePhone } from "@/lib/utils";

type ContactPayload = {
  prenom?: unknown;
  nom?: unknown;
  email?: unknown;
  telephone?: unknown;
  adresse?: unknown;
  surface?: unknown;
  besoin?: unknown;
};

type ContactData = {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  adresse: string;
  surface: number;
  besoin: string;
};

export const runtime = "nodejs";

function cleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function toPositiveNumber(value: string) {
  const normalizedValue = value.replace(",", ".");
  const numberValue = Number(normalizedValue);

  return Number.isFinite(numberValue) && numberValue > 0 ? numberValue : null;
}

function getRequiredEnv(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Variable d'environnement manquante : ${name}`);
  }

  return value;
}

function getPrivateKey() {
  return getRequiredEnv("GOOGLE_SHEETS_PRIVATE_KEY").replace(/\\n/g, "\n");
}

function getSheetRange() {
  const sheetName = process.env.GOOGLE_SHEETS_TAB_NAME?.trim() || "Contacts";
  const escapedSheetName = sheetName.replace(/'/g, "''");

  return `'${escapedSheetName}'!A:H`;
}

function buildEmailText(contact: ContactData) {
  return [
    "Nouvelle demande de devis",
    "",
    `Prénom : ${contact.prenom}`,
    `Nom : ${contact.nom}`,
    `Email : ${contact.email}`,
    `Téléphone : ${contact.telephone}`,
    `Adresse : ${contact.adresse}`,
    `Surface : ${contact.surface} m²`,
    `Besoin : ${contact.besoin}`
  ].join("\n");
}

function validateContact(payload: ContactPayload) {
  const prenom = cleanString(payload.prenom);
  const nom = cleanString(payload.nom);
  const email = cleanString(payload.email).toLowerCase();
  const telephone = normalizePhone(cleanString(payload.telephone));
  const adresse = cleanString(payload.adresse);
  const rawSurface = cleanString(payload.surface);
  const surface = toPositiveNumber(rawSurface);
  const besoin = cleanString(payload.besoin);
  const fieldErrors: Record<string, string> = {};

  if (!prenom) {
    fieldErrors.prenom = "Le prénom est requis.";
  }

  if (!nom) {
    fieldErrors.nom = "Le nom est requis.";
  }

  if (!email) {
    fieldErrors.email = "L'adresse email est requise.";
  } else if (!isValidEmail(email)) {
    fieldErrors.email = "L'adresse email n'est pas valide.";
  }

  if (!telephone) {
    fieldErrors.telephone = "Le téléphone est requis.";
  }

  if (!adresse) {
    fieldErrors.adresse = "L'adresse postale est requise.";
  }

  if (!rawSurface) {
    fieldErrors.surface = "La surface est requise.";
  } else if (!surface) {
    fieldErrors.surface = "La surface doit être un nombre supérieur à 0.";
  }

  if (!besoin) {
    fieldErrors.besoin = "Votre besoin est requis.";
  }

  if (Object.keys(fieldErrors).length > 0 || surface === null) {
    return { fieldErrors };
  }

  return {
    contact: {
      prenom,
      nom,
      email,
      telephone,
      adresse,
      surface,
      besoin
    }
  };
}

async function sendEmail(contact: ContactData) {
  const emailUser = getRequiredEnv("EMAIL_USER");
  const emailPass = getRequiredEnv("EMAIL_PASS");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass
    }
  });

  console.log("[contacts] Envoi email Gmail en cours :", contact.email);

  await transporter.sendMail({
    from: `"Lilicleanservices" <${emailUser}>`,
    to: emailUser,
    replyTo: contact.email,
    subject: "Nouvelle demande de devis",
    text: buildEmailText(contact)
  });

  console.log("[contacts] Email Gmail envoye.");
}

async function appendToGoogleSheet(contact: ContactData) {
  const spreadsheetId = getRequiredEnv("GOOGLE_SHEETS_SPREADSHEET_ID");
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: getRequiredEnv("GOOGLE_SHEETS_CLIENT_EMAIL"),
      private_key: getPrivateKey()
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  });
  const sheets = google.sheets({ version: "v4", auth });
  const values = [
    [
      new Date().toISOString(),
      contact.prenom,
      contact.nom,
      contact.email,
      contact.telephone,
      contact.adresse,
      contact.surface,
      contact.besoin
    ]
  ];

  console.log("[contacts] Ajout Google Sheets en cours :", {
    spreadsheetId,
    range: getSheetRange()
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: getSheetRange(),
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values
    }
  });

  console.log("[contacts] Ligne ajoutee dans Google Sheets.");
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    console.log("[contacts] Donnees recues :", JSON.stringify(payload));

    const validation = validateContact(payload);

    if ("fieldErrors" in validation) {
      return NextResponse.json(
        {
          success: false,
          message: "Merci de corriger les champs indiqués.",
          fieldErrors: validation.fieldErrors
        },
        { status: 400 }
      );
    }

    await Promise.all([
      sendEmail(validation.contact),
      appendToGoogleSheet(validation.contact)
    ]);

    return NextResponse.json(
      {
        success: true,
        message: "Demande envoyée avec succès"
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[contacts] Echec de la requete :", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Une erreur est survenue. Merci de réessayer dans un instant."
      },
      { status: 500 }
    );
  }
}
