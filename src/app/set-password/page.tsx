import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

async function setPassword(formData: FormData) {
  "use server"
  const password = String(formData.get("password") ?? "")
  const confirm = String(formData.get("confirm") ?? "")

  if (password.length < 8) throw new Error("password too short")
  if (password !== confirm) throw new Error("passwords do not match")

  const supabase = await createClient()
  const { data: claims } = await supabase.auth.getClaims()
  if (!claims) redirect("/login")

  const { error } = await supabase.auth.updateUser({ password })
  if (error) throw new Error(error.message)

  redirect("/library")
}

export default async function SetPasswordPage() {
  const supabase = await createClient()
  const { data: claims } = await supabase.auth.getClaims()
  if (!claims) redirect("/login")

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-md px-6 py-16">
        <h1 className="text-3xl font-semibold text-white">Create your password</h1>
        <p className="mt-2 text-neutral-400">
          Set a password for future logins.
        </p>

        <form action={setPassword} className="mt-10 space-y-4">
          <input
            name="password"
            type="password"
            placeholder="new password"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
            required
          />
          <input
            name="confirm"
            type="password"
            placeholder="confirm new password"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
            required
          />
          <button className="w-full rounded-xl bg-[color:var(--ws-navy)] px-4 py-3 text-white hover:opacity-90">
            Save password
          </button>
        </form>
      </div>
    </main>
  )
}
