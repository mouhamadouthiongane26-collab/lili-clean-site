# Lilicleanservices

Site vitrine `Next.js` pour `Lilicleanservices`, pensé pour la conversion locale autour de `Saint-Julien-de-l'Escap`.

## Lancer le projet

1. Installer les dépendances :
   `npm install`
2. Copier les variables d'environnement :
   `.env.example` vers `.env.local`
3. Démarrer le serveur :
   `npm run dev`

## Variables d'environnement

- `NEXT_PUBLIC_SITE_URL`
- `EMAIL_USER` : adresse Gmail qui reçoit les demandes
- `EMAIL_PASS` : mot de passe d'application Gmail
- `GOOGLE_SHEETS_SPREADSHEET_ID` : identifiant du fichier Google Sheets
- `GOOGLE_SHEETS_CLIENT_EMAIL` : email du compte de service Google
- `GOOGLE_SHEETS_PRIVATE_KEY` : clé privée du compte de service
- `GOOGLE_SHEETS_TAB_NAME` : onglet cible, `Contacts` par défaut

## Formulaire

- Le formulaire de devis envoie les demandes via `/api/contacts`.
- La route API envoie un email Gmail et ajoute une ligne dans Google Sheets.
- La feuille Google Sheets doit être partagée avec `GOOGLE_SHEETS_CLIENT_EMAIL`.
- Une version HTML/CSS/JavaScript autonome est disponible dans `public/formulaire-devis-lilicleanservice.html`.

## Contenu à remplacer avant production

- logo définitif
- témoignages clients réels
- photos métier
- horaires exacts
- mentions légales complètes
