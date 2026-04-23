create extension if not exists "pgcrypto";

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  nom text not null,
  email text not null,
  telephone text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contacts enable row level security;

create policy "Public can insert contacts"
on public.contacts
for insert
to anon, authenticated
with check (true);

create policy "Authenticated can read contacts"
on public.contacts
for select
to authenticated
using (true);
