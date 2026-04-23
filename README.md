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
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`

## Supabase

- Le schéma SQL initial est dans [supabase/migrations/0001_init.sql](/Users/mouhamadoumoustaphathiongane/Documents/lili%20clean/supabase/migrations/0001_init.sql)
- Le formulaire de contact enregistre maintenant les demandes dans la table `contacts`
- Les autres tables sont prêtes pour une administration légère via `Supabase Studio`

## Contenu à remplacer avant production

- logo définitif
- témoignages clients réels
- photos métier
- horaires exacts
- mentions légales complètes
