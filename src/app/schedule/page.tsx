import Link from "next/link"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

const WEEK_SCHEDULE = [
  {
    label: "Monday, Wednesday, Friday",
    time: "7:00 AM MT / 9:00 AM ET",
    note: "Daily live class with rotating focus and intensity.",
  },
  {
    label: "Tuesday, Thursday, Saturday",
    time: "8:00 AM MT / 10:00 AM ET",
    note: "Daily live class with rotating focus and intensity.",
  },
  {
    label: "Tuesday & Thursday",
    time: "Coming soon",
    note: "Stretch class for recovery and mobility work.",
  },
]

export default async function SchedulePage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect("/login")

  return (
    <main className="ws-member">
      <div className="ws-member-page">
        <div className="ws-member-hello">
          <div>
            <div className="ws-eyebrow">Weekly schedule</div>
            <h1 className="ws-member-h1">Consistent class times, new workouts each day.</h1>
            <p className="ws-member-sub">
              Workouts change daily, but class times stay consistent. Times are listed in
              MT and ET so everyone can plan ahead.
            </p>
          </div>
          <Link href="/" className="ws-btn ws-btn-ghost">
            Home
          </Link>
        </div>

        <div className="ws-member-list">
          {WEEK_SCHEDULE.map((slot) => (
            <div key={`${slot.label}-${slot.time}`} className="ws-member-row">
              <div className="ws-member-row-body">
                <div className="ws-eyebrow ws-eyebrow-small">{slot.label}</div>
                <div className="ws-member-row-title">{slot.note}</div>
              </div>
              <span className="ws-chip">{slot.time}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
