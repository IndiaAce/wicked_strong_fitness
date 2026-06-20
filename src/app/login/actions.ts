"use server"

import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export async function signIn(formData: FormData) {
  const email = String(formData.get("email") ?? "")
  const password = String(formData.get("password") ?? "")

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) redirect(`/login?error=${encodeURIComponent(error.message)}`)

  const {
    data: { user },
  } = await supabase.auth.getUser()
  const role = user?.app_metadata?.role ?? user?.user_metadata?.role
  redirect(role === "pd_member" ? "/pd/schedule" : "/")
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect("/")
}
