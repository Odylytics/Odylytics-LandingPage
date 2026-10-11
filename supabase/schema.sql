-- Run once in the Supabase SQL editor (Project → SQL Editor).
-- Public visitors can read; only signed-in members can write.
-- Create members in Authentication → Users (disable public sign-ups in Authentication → Providers → Email).

create table if not exists public.posts (
  id text primary key,
  data jsonb not null,
  sort int not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id text primary key,
  data jsonb not null,
  sort int not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.posts enable row level security;
alter table public.testimonials enable row level security;

create policy "public read posts" on public.posts for select using (true);
create policy "members write posts" on public.posts for all to authenticated using (true) with check (true);

create policy "public read testimonials" on public.testimonials for select using (true);
create policy "members write testimonials" on public.testimonials for all to authenticated using (true) with check (true);
