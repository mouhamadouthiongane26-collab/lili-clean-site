import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function normalizePhone(input: string) {
  return input.replace(/[^\d+]/g, "").trim();
}

export function toWhatsAppNumber(phone: string) {
  const cleaned = normalizePhone(phone).replace(/^\+/, "");

  if (cleaned.startsWith("33")) {
    return cleaned;
  }

  if (cleaned.startsWith("0")) {
    return `33${cleaned.slice(1)}`;
  }

  return cleaned;
}

export function formatPhoneDisplay(phone: string) {
  const digits = phone.replace(/\D/g, "");

  if (digits.length !== 10) {
    return phone;
  }

  return digits.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
}
