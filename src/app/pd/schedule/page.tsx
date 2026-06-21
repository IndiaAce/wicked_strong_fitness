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
    <main className="ws-member">
      <div className="ws-member-page">
        <div className="ws-member-hello">
          <div>
            <div className="ws-eyebrow">Wicked Strong PD</div>
            <h1 className="ws-member-h1">Your weekly class schedule.</h1>
            <p className="ws-member-sub">
              Classes run Monday, Tuesday, Thursday, Friday, and Saturday. Join from home via
              Zoom — a chair and light weights are recommended.
            </p>
          </div>
          <Link href="/pd" className="ws-btn ws-btn-ghost">
            About the program
          </Link>
        </div>

        {ZOOM_LINK ? (
          <div className="ws-member-card ws-member-card-feature" style={{ marginBottom: "24px" }}>
            <div className="ws-eyebrow">Join class on Zoom</div>
            <div className="ws-member-card-row">
              <a href={ZOOM_LINK} target="_blank" rel="noreferrer" className="ws-btn ws-btn-primary">
                Open Zoom link
              </a>
            </div>
          </div>
        ) : null}

        <div className="ws-member-list">
          {CLASS_SCHEDULE.map((slot) => (
            <div key={slot.days} className="ws-member-row">
              <div className="ws-member-row-body">
                <div className="ws-eyebrow ws-eyebrow-small">{slot.days}</div>
                <div className="ws-member-row-meta">{slot.note}</div>
              </div>
              <span className="ws-chip">{slot.time}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
