create extension if not exists "pgcrypto";

create type public.lead_status as enum ('nouveau', 'contacte', 'converti', 'archive');

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  customer_type text not null,
  service_type text not null,
  location text not null,
  surface text not null,
  frequency text not null,
  message text not null,
  status public.lead_status not null default 'nouveau',
  consent boolean not null default false
);

create table if not exists public.faq_items (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  question text not null,
  answer text not null,
  sort_order int not null default 0,
  is_active boolean not null default true
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  company text,
  quote text not null,
  rating int not null default 5 check (rating between 1 and 5),
  is_featured boolean not null default false,
  note text
);

create table if not exists public.service_pages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  slug text not null unique,
  title text not null,
  excerpt text not null,
  content text not null default '',
  is_active boolean not null default true,
  seo_title text,
  seo_description text
);

create table if not exists public.site_settings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  company_name text not null,
  phone text not null,
  email text not null,
  address text,
  city text not null,
  hours text,
  hero_title text,
  hero_subtitle text,
  service_area text
);

alter table public.leads enable row level security;
alter table public.faq_items enable row level security;
alter table public.testimonials enable row level security;
alter table public.service_pages enable row level security;
alter table public.site_settings enable row level security;

create policy "Public can insert leads"
on public.leads
for insert
to anon, authenticated
with check (true);

create policy "Authenticated can read leads"
on public.leads
for select
to authenticated
using (true);

create policy "Authenticated can update leads"
on public.leads
for update
to authenticated
using (true)
with check (true);

create policy "Authenticated can manage faq"
on public.faq_items
for all
to authenticated
using (true)
with check (true);

create policy "Public can read active faq"
on public.faq_items
for select
to anon, authenticated
using (is_active = true);

create policy "Authenticated can manage testimonials"
on public.testimonials
for all
to authenticated
using (true)
with check (true);

create policy "Public can read featured testimonials"
on public.testimonials
for select
to anon, authenticated
using (is_featured = true or note is not null);

create policy "Authenticated can manage service pages"
on public.service_pages
for all
to authenticated
using (true)
with check (true);

create policy "Public can read active service pages"
on public.service_pages
for select
to anon, authenticated
using (is_active = true);

create policy "Authenticated can manage site settings"
on public.site_settings
for all
to authenticated
using (true)
with check (true);

create policy "Public can read site settings"
on public.site_settings
for select
to anon, authenticated
using (true);

insert into public.site_settings (
  company_name,
  phone,
  email,
  city,
  hours,
  hero_title,
  hero_subtitle,
  service_area
)
values (
  'Lilicleanservices',
  '06 28 83 78 18',
  'lilicleanservices17@gmail.com',
  'Saint-Julien-de-l''Escap',
  'Horaires à confirmer',
  'Un intérieur net, une prestation carrée, un service qui rassure.',
  'Lilicleanservices accompagne les particuliers, locations courte durée et petites structures professionnelles autour de Saint-Julien-de-l''Escap.',
  'Saint-Julien-de-l''Escap et alentours'
)
on conflict do nothing;

insert into public.faq_items (question, answer, sort_order, is_active)
values
  ('Quelles zones desservez-vous ?', 'Lilicleanservices intervient principalement à Saint-Julien-de-l''Escap et dans les alentours.', 1, true),
  ('Le devis est-il gratuit ?', 'Oui, le devis est gratuit et sans engagement.', 2, true),
  ('Travaillez-vous pour les particuliers et les professionnels ?', 'Oui, pour les particuliers, les hôtes Airbnb et les professionnels locaux.', 3, true)
on conflict do nothing;

insert into public.testimonials (name, quote, rating, is_featured, note)
values
  ('Cliente particulier', 'Exemple de témoignage à remplacer par un avis client réel avant la mise en production.', 5, true, 'Contenu éditorial temporaire'),
  ('Hôte Airbnb', 'Exemple de témoignage de rotation courte durée à remplacer par un avis réel.', 5, true, 'Contenu éditorial temporaire')
on conflict do nothing;

insert into public.service_pages (slug, title, excerpt, content, is_active, seo_title, seo_description)
values
  ('menage-a-domicile-regulier', 'Ménage à domicile régulier', 'Entretien fiable et régulier de votre logement.', '', true, 'Ménage à domicile régulier', 'Ménage à domicile régulier à Saint-Julien-de-l''Escap.'),
  ('grand-nettoyage-nettoyage-de-printemps', 'Grand nettoyage / nettoyage de printemps', 'Remise à niveau complète pour repartir sur une base saine.', '', true, 'Grand nettoyage à Saint-Julien-de-l''Escap', 'Grand nettoyage et remise en état à Saint-Julien-de-l''Escap.'),
  ('nettoyage-airbnb-courte-duree', 'Nettoyage Airbnb (courte durée)', 'Rotation et remise en état entre deux voyageurs.', '', true, 'Nettoyage Airbnb à Saint-Julien-de-l''Escap', 'Nettoyage Airbnb et courte durée à Saint-Julien-de-l''Escap.'),
  ('nettoyage-apres-demenagement', 'Nettoyage après déménagement', 'Nettoyage complet avant état des lieux ou emménagement.', '', true, 'Nettoyage après déménagement', 'Nettoyage après déménagement à Saint-Julien-de-l''Escap.'),
  ('nettoyage-des-vitres', 'Nettoyage des vitres', 'Vitres plus nettes et plus lumineuses.', '', true, 'Nettoyage des vitres', 'Nettoyage des vitres à Saint-Julien-de-l''Escap.'),
  ('repassage-a-domicile', 'Repassage à domicile', 'Service pratique pour alléger le quotidien.', '', true, 'Repassage à domicile', 'Repassage à domicile à Saint-Julien-de-l''Escap.')
on conflict (slug) do nothing;
