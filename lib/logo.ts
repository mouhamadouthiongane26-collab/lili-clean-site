import { existsSync } from "node:fs";
import path from "node:path";

const ALLOWED_LOGO_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".svg"]);
const LOGO_FILE_NAME = "LOGO.png";

export function getSafeLogoSrc() {
  const extension = path.extname(LOGO_FILE_NAME).toLowerCase();

  if (!ALLOWED_LOGO_EXTENSIONS.has(extension)) {
    return null;
  }

  const logoPath = path.join(process.cwd(), "public", "images", LOGO_FILE_NAME);

  if (!existsSync(logoPath)) {
    return null;
  }

  return encodeURI(`/images/${LOGO_FILE_NAME}`);
}
