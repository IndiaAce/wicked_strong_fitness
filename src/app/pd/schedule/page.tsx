import Link from "next/link"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

const CLASS_SCHEDULE = [
  {
    days: "Monday",
    time: "TBD",
    note: "Live virtual class via Zoom. Link provided after sign-in.",
  },
  {
    days: "Tuesday",
    time: "TBD",
    note: "Live virtual class via Zoom. Link provided after sign-in.",
  },
  {
    days: "Thursday",
    time: "TBD",
    note: "Live virtual class via Zoom. Link provided after sign-in.",
  },
  {
    days: "Friday",
    time: "TBD",
    note: "Live virtual class via Zoom. Link provided after sign-in.",
  },
  {
    days: "Saturday",
    time: "TBD",
    note: "Live virtual class via Zoom. Link provided after sign-in.",
  },
]

// Update this with the Zoom link for the PD classes
const ZOOM_LINK = ""

export default async function PDSchedulePage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect("/login")

  const role = user.app_metadata?.role ?? user.user_metadata?.role
  if (role !== "pd_member") redirect("/")

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
              Wicked Strong PD
            </p>
            <h1 className="font-display mt-4 text-3xl text-[color:var(--ws-ink)] sm:text-4xl">
              Your weekly class schedule.
            </h1>
            <p className="mt-3 text-sm text-[color:var(--ws-muted)]">
              Classes run Monday, Tuesday, Thursday, Friday, and Saturday. Join from home via Zoom — a chair and light weights are recommended.
            </p>
          </div>
          <Link
            href="/pd"
            className="rounded-full border border-black/10 px-4 py-2 text-sm hover:bg-black/5"
          >
            About the program
          </Link>
        </div>

        {ZOOM_LINK ? (
          <div className="mt-8 rounded-2xl border border-black/10 bg-[color:var(--ws-sand)] p-5">
            <p className="text-sm font-semibold text-[color:var(--ws-ink)]">Join class on Zoom</p>
            <a
              href={ZOOM_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex rounded-full bg-[color:var(--ws-navy)] px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Open Zoom link
            </a>
          </div>
        ) : null}

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {CLASS_SCHEDULE.map((slot) => (
            <div
              key={slot.days}
              className="rounded-3xl border border-black/10 bg-[color:var(--ws-pearl)] p-6 shadow-sm"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
                {slot.days}
              </div>
              <div className="mt-3 flex items-center justify-between">
                <h2 className="font-display text-xl text-[color:var(--ws-ink)]">Class time</h2>
                <span className="rounded-full bg-[color:var(--ws-sand)] px-3 py-1 text-xs font-semibold text-[color:var(--ws-ink)]">
                  {slot.time}
                </span>
              </div>
              <p className="mt-3 text-sm text-[color:var(--ws-muted)]">{slot.note}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
