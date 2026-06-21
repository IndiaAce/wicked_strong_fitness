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
    <main className="ws-member">
      <div className="ws-member-page">
        <div className="ws-member-hello">
          <div>
            <div className="ws-eyebrow">Newsletter hub</div>
            <h1 className="ws-member-h1">Latest newsletters and studio updates.</h1>
            <p className="ws-member-sub">
              Browse the most recent newsletters and download the PDFs anytime.
            </p>
          </div>
          <Link href="/" className="ws-btn ws-btn-ghost">
            Home
          </Link>
        </div>

        <div className="ws-member-list">
          {NEWSLETTERS.map((item) => (
            <div key={item.title} className="ws-member-row ws-member-row-news">
              <div className="ws-member-row-body">
                <div className="ws-member-row-title">{item.title}</div>
              </div>
              <Link
                href={`/newsletter/newsletters/${encodeURIComponent(item.file)}`}
                className="ws-btn ws-btn-ghost ws-btn-small"
                target="_blank"
                rel="noreferrer"
              >
                View PDF
              </Link>
            </div>
          ))}
        </div>

        {isAdmin ? (
          <div className="ws-member-card" style={{ marginTop: "24px", maxWidth: "520px" }}>
            <div className="ws-eyebrow">Admin</div>
            <h2>Upload new newsletter</h2>
            <p className="ws-member-muted">
              Admin-only upload. Connect this to storage when you are ready.
            </p>
            <form className="ws-member-card-row" style={{ flexDirection: "column", gap: "12px" }}>
              <input
                type="text"
                placeholder="Newsletter title"
                className="w-full rounded-xl border border-[color:var(--ws-line)] bg-[color:var(--ws-cream)] px-4 py-3 text-sm"
              />
              <input
                type="file"
                accept="application/pdf"
                className="w-full rounded-xl border border-[color:var(--ws-line)] bg-[color:var(--ws-cream)] px-4 py-3 text-sm"
              />
              <button type="button" className="ws-btn ws-btn-primary">
                Upload PDF
              </button>
            </form>
          </div>
        ) : null}
      </div>
    </main>
  )
}
