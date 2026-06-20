import Link from "next/link"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export default async function PDLibraryPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect("/login")

  const role = user.app_metadata?.role ?? user.user_metadata?.role
  if (role !== "pd_member") redirect("/")

  const { data, error } = await supabase
    .from("pd_workouts")
    .select("id,title,recording_url,class_date,notes")
    .order("class_date", { ascending: false })

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
              Wicked Strong PD
            </p>
            <h1 className="font-display mt-4 text-3xl font-semibold text-[color:var(--ws-ink)]">
              Class Recordings
            </h1>
            <p className="mt-2 text-[color:var(--ws-muted)]">
              Access recordings from past PD classes anytime.
            </p>
          </div>
          <Link
            className="rounded-full border border-black/10 px-4 py-2 text-sm hover:bg-black/5"
            href="/pd/schedule"
          >
            Schedule
          </Link>
        </div>

        <div className="mt-10 grid gap-4">
          {error || !data || data.length === 0 ? (
            <div className="rounded-3xl border border-black/10 bg-[color:var(--ws-pearl)] p-10 text-center">
              <p className="font-display text-xl text-[color:var(--ws-ink)]">
                Recordings coming soon
              </p>
              <p className="mt-2 text-sm text-[color:var(--ws-muted)]">
                Past class recordings will appear here. Check back after your first session!
              </p>
            </div>
          ) : (
            data.map((w) => (
              <a
                key={w.id}
                href={w.recording_url}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-black/10 bg-[color:var(--ws-pearl)] p-5 shadow-sm hover:bg-black/5"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-lg font-medium text-[color:var(--ws-ink)]">
                      {w.title}
                    </div>
                    {w.class_date ? (
                      <div className="mt-1 text-sm text-[color:var(--ws-muted)]">
                        {new Date(w.class_date).toLocaleDateString()}
                      </div>
                    ) : null}
                    {w.notes ? (
                      <div className="mt-2 text-sm text-[color:var(--ws-muted)]">{w.notes}</div>
                    ) : null}
                  </div>
                  <div className="text-sm text-[color:var(--ws-muted)]">Open</div>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </main>
  )
}
