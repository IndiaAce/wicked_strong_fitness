"use client"

import type { FormEvent } from "react"
import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

type Status = "loading" | "ready" | "error"

export function SetPasswordClient() {
  const supabase = useMemo(() => createClient(), [])
  const router = useRouter()
  const [status, setStatus] = useState<Status>("loading")
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const syncSession = async () => {
      setError(null)
      const hash = window.location.hash
      if (hash) {
        const params = new URLSearchParams(hash.slice(1))
        const accessToken = params.get("access_token")
        const refreshToken = params.get("refresh_token")
        if (accessToken && refreshToken) {
          const { error: sessionError } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          })
          if (sessionError) {
            setError(sessionError.message)
            setStatus("error")
            return
          }
          window.history.replaceState({}, "", window.location.pathname)
        }
      }

      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        setStatus("error")
        setError("Invite link expired or invalid. Please request a new invite.")
        return
      }

      setStatus("ready")
    }

    void syncSession()
  }, [supabase])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)

    const formData = new FormData(event.currentTarget)
    const password = String(formData.get("password") ?? "")
    const confirm = String(formData.get("confirm") ?? "")

    if (password.length < 8) {
      setError("Password must be at least 8 characters.")
      return
    }
    if (password !== confirm) {
      setError("Passwords do not match.")
      return
    }

    setSaving(true)
    const { error: updateError } = await supabase.auth.updateUser({ password })
    setSaving(false)

    if (updateError) {
      setError(updateError.message)
      return
    }

    router.replace("/")
  }

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-md px-6 py-16">
        <h1 className="text-3xl font-semibold text-[color:var(--ws-ink)]">
          Create your password
        </h1>
        <p className="mt-2 text-[color:var(--ws-muted)]">
          Set a password for future logins.
        </p>

        {status === "loading" ? (
          <p className="mt-6 text-sm text-[color:var(--ws-muted)]">
            Checking your invite link...
          </p>
        ) : null}

        {error ? (
          <p className="mt-6 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </p>
        ) : null}

        {status === "ready" ? (
          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <input
              name="password"
              type="password"
              placeholder="new password"
              className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-[color:var(--ws-ink)]"
              required
            />
            <input
              name="confirm"
              type="password"
              placeholder="confirm new password"
              className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-[color:var(--ws-ink)]"
              required
            />
            <button
              className="w-full rounded-xl bg-[color:var(--ws-navy)] px-4 py-3 text-white hover:opacity-90 disabled:opacity-60"
              disabled={saving}
              type="submit"
            >
              {saving ? "Saving..." : "Save password"}
            </button>
          </form>
        ) : null}
      </div>
    </main>
  )
}
