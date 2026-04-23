create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nom text not null,
  email text not null default '',
  telephone text not null,
  message text not null default ''
);

alter table public.contacts add column if not exists nom text;
alter table public.contacts add column if not exists email text default '';
alter table public.contacts add column if not exists telephone text;
alter table public.contacts add column if not exists message text default '';

alter table public.contacts enable row level security;

drop policy if exists "Public can insert contacts" on public.contacts;

create policy "Public can insert contacts"
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
