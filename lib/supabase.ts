import { createClient } from "@supabase/supabase-js";

function env(name: string) {
  return process.env[name]?.trim() || "";
}

function getSupabaseUrl() {
  return env("NEXT_PUBLIC_SUPABASE_URL");
}

function getSupabaseAnonKey() {
  return env("NEXT_PUBLIC_SUPABASE_ANON_KEY");
}

function getSupabaseServiceRoleKey() {
  return env("SUPABASE_SERVICE_ROLE_KEY");
}

export function getSupabaseServerClient() {
  const supabaseUrl = getSupabaseUrl();
  const supabaseAnonKey = getSupabaseAnonKey();

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

export function getSupabaseAdminClient() {
  const supabaseUrl = getSupabaseUrl();
  const supabaseServiceRoleKey = getSupabaseServiceRoleKey();

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

export function hasSupabasePublicConfig() {
  return Boolean(getSupabaseUrl() && getSupabaseAnonKey());
}

export function getSupabaseConfigStatus() {
  return {
    hasUrl: Boolean(getSupabaseUrl()),
    hasAnonKey: Boolean(getSupabaseAnonKey()),
    hasServiceRoleKey: Boolean(getSupabaseServiceRoleKey())
  };
}
