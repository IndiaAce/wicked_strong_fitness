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
    <main className="ws-member">
      <div className="ws-member-page">
        <div className="ws-member-hello">
          <div>
            <div className="ws-eyebrow">Wicked Strong PD</div>
            <h1 className="ws-member-h1">Class recordings</h1>
            <p className="ws-member-sub">Access recordings from past PD classes anytime.</p>
          </div>
          <Link className="ws-btn ws-btn-ghost" href="/pd/schedule">
            Schedule
          </Link>
        </div>

        <div className="ws-member-list">
          {error || !data || data.length === 0 ? (
            <div className="ws-member-card" style={{ textAlign: "center", padding: "40px" }}>
              <h3>Recordings coming soon</h3>
              <p className="ws-member-muted">
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
                className="ws-member-row"
              >
                <div className="ws-member-row-thumb">▶</div>
                <div className="ws-member-row-body">
                  <div className="ws-member-row-title">{w.title}</div>
                  <div className="ws-member-row-meta">
                    {w.class_date ? new Date(w.class_date).toLocaleDateString() : null}
                    {w.notes ? `${w.class_date ? " · " : ""}${w.notes}` : null}
                  </div>
                </div>
                <span className="ws-btn ws-btn-ghost ws-btn-small">Watch</span>
              </a>
            ))
          )}
        </div>
      </div>
    </main>
  )
}
