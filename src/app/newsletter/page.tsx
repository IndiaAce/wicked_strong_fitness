import Link from "next/link"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

const NEWSLETTERS = [
  {
    title: "WS 12/7",
    file: "WS 12_7.pdf",
  },
  {
    title: "WS 12/21",
    file: "WS 12_21.pdf",
  },
]

export default async function NewsletterPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect("/login")

  const adminEmails = (process.env.NEWSLETTER_ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean)
  const userEmail = user.email?.toLowerCase()
  const role = user.app_metadata?.role ?? user.user_metadata?.role
  const isAdmin = role === "admin" || (!!userEmail && adminEmails.includes(userEmail))

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
              Newsletter hub
            </p>
            <h1 className="font-display mt-4 text-3xl text-[color:var(--ws-ink)] sm:text-4xl">
              Latest newsletters and studio updates.
            </h1>
            <p className="mt-3 text-sm text-[color:var(--ws-muted)]">
              Browse the most recent newsletters and download the PDFs anytime.
            </p>
          </div>
          <Link
            href="/"
            className="rounded-full border border-black/10 px-4 py-2 text-sm hover:bg-black/5"
          >
            Home
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-black/10 bg-[color:var(--ws-sand)] p-6 shadow-sm">
            <h2 className="font-display text-2xl text-[color:var(--ws-ink)]">
              Latest newsletters
            </h2>
            <div className="mt-6 space-y-4 text-sm text-[color:var(--ws-muted)]">
              {NEWSLETTERS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-black/10 bg-[color:var(--ws-pearl)] p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mt-2 text-base font-semibold text-[color:var(--ws-ink)]">
                        {item.title}
                      </div>
                    </div>
                    <Link
                      href={`/newsletter/newsletters/${encodeURIComponent(item.file)}`}
                      className="rounded-full border border-black/10 px-3 py-1 text-xs font-semibold text-[color:var(--ws-ink)]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View PDF
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {isAdmin ? (
            <div className="rounded-3xl border border-black/10 bg-[color:var(--ws-pearl)] p-6 shadow-sm">
              <h2 className="font-display text-2xl text-[color:var(--ws-ink)]">
                Upload new newsletter
              </h2>
              <p className="mt-2 text-sm text-[color:var(--ws-muted)]">
                Admin-only upload. Connect this to storage when you are ready.
              </p>
              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Newsletter title"
                  className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm"
                />
                <input
                  type="file"
                  accept="application/pdf"
                  className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm"
                />
                <button
                  type="button"
                  className="rounded-full bg-[color:var(--ws-navy)] px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
                >
                  Upload PDF
                </button>
              </form>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  )
}
