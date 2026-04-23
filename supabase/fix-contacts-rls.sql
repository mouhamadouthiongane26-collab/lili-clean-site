create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  prenom text,
  nom text,
  email text,
  telephone text,
  adresse text,
  surface integer,
  besoin text
);

alter table public.contacts add column if not exists prenom text;
alter table public.contacts add column if not exists nom text;
alter table public.contacts add column if not exists email text;
alter table public.contacts add column if not exists telephone text;
alter table public.contacts add column if not exists adresse text;
alter table public.contacts add column if not exists surface integer;
alter table public.contacts add column if not exists besoin text;

grant usage on schema public to anon, authenticated;
grant insert on public.contacts to anon, authenticated;
grant select, update on public.contacts to authenticated;

alter table public.contacts enable row level security;

drop policy if exists "Public can insert contacts" on public.contacts;
drop policy if exists "Allow insert for all users" on public.contacts;

create policy "Allow insert for all users"
on public.contacts
for insert
to anon, authenticated
with check (true);

drop policy if exists "Authenticated can read contacts" on public.contacts;

create policy "Authenticated can read contacts"
on public.contacts
for select
to authenticated
using (true);

drop policy if exists "Authenticated can update contacts" on public.contacts;

create policy "Authenticated can update contacts"
on public.contacts
for update
to authenticated
using (true)
with check (true);
