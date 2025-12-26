import Link from "next/link"

const NEWSLETTERS = [
  {
    title: "Spring Reset",
    date: "April 7, 2025",
    description: "Studio wins, April challenges, and the new strength series.",
  },
  {
    title: "Stronger Days",
    date: "March 31, 2025",
    description: "Member spotlights, playlist picks, and mobility highlights.",
  },
  {
    title: "Fresh Focus",
    date: "March 24, 2025",
    description: "Weekly schedule, wellness tips, and community notes.",
  },
]

export default function NewsletterPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
              Newsletter hub
            </p>
            <h1 className="font-display mt-4 text-3xl text-[color:var(--ws-ink)] sm:text-4xl">
              Weekly PDF drops and studio updates.
            </h1>
            <p className="mt-3 text-sm text-[color:var(--ws-muted)]">
              Upload weekly newsletters here so members can download or catch up later.
              The upload form is ready to wire into Supabase Storage or another file
              manager when you are ready.
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
          <div className="rounded-3xl border border-black/10 bg-[color:var(--ws-pearl)] p-6 shadow-sm">
            <h2 className="font-display text-2xl text-[color:var(--ws-ink)]">
              Upload a new PDF
            </h2>
            <p className="mt-2 text-sm text-[color:var(--ws-muted)]">
              Drag and drop or browse to add the latest newsletter.
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

          <div className="rounded-3xl border border-black/10 bg-[color:var(--ws-sand)] p-6 shadow-sm">
            <h2 className="font-display text-2xl text-[color:var(--ws-ink)]">
              Recent newsletters
            </h2>
            <div className="mt-6 space-y-4 text-sm text-[color:var(--ws-muted)]">
              {NEWSLETTERS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-black/10 bg-[color:var(--ws-pearl)] p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
                        {item.date}
                      </div>
                      <div className="mt-2 text-base font-semibold text-[color:var(--ws-ink)]">
                        {item.title}
                      </div>
                      <p className="mt-2 text-sm text-[color:var(--ws-muted)]">
                        {item.description}
                      </p>
                    </div>
                    <button className="rounded-full border border-black/10 px-3 py-1 text-xs font-semibold text-[color:var(--ws-ink)]">
                      View PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
