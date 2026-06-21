import Link from "next/link"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

const TYPES = [
  "high reps workout",
  "mobility strength + stretch",
  "standing core",
  "cardio",
  "arms",
  "strength",
  "legs",
] as const

const DEMO_WORKOUTS = [
  {
    id: "demo-high-reps",
    title: "High Reps Workout",
    workout_type: "high reps workout",
    recording_url:
      "https://us02web.zoom.us/rec/share/f6RqzyhOrchGZtDlcs3j8g5T0eb-lQomWGz9dkbs7Q6_lqmeKbv9uFNO2IZ5Apbg.q8spfL-PLL97gwYn",
    passcode: "UZ06E#*n",
    class_date: null,
  },
  {
    id: "demo-mobility-strength-stretch",
    title: "Mobility, Strength + Stretch",
    workout_type: "mobility strength + stretch",
    recording_url:
      "https://us02web.zoom.us/rec/share/KBCtet1QwVdIUrWqWXY-3cxVffYfpERwqHvb70SxFev22797Ll57pytQklFMRyrk.4Bx_ACCgj9ImOSkB",
    passcode: "N?23cp9L",
    class_date: null,
  },
  {
    id: "demo-standing-core",
    title: "Standing Core",
    workout_type: "standing core",
    recording_url:
      "https://us02web.zoom.us/rec/share/iV-tmLwOMbfjwuhtZ0MnhYimEENPfcc13SSXITtyiGFSuVR-DtzATlB0Z2L57lhz.sA4h4EaAJ8Su-ezE",
    passcode: "*2Ty8@+%",
    class_date: null,
  },
]

export default async function LibraryPage({
  searchParams,
}: {
  searchParams: { type?: string }
}) {
  const type =
    searchParams.type && (TYPES as readonly string[]).includes(searchParams.type)
      ? searchParams.type
      : null

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect("/login")

  const q = supabase
    .from("workouts")
    .select("id,title,workout_type,recording_url,created_at,class_date")
    .order("created_at", { ascending: false })

  const { data, error } = type ? await q.eq("workout_type", type) : await q

  if (error) {
    return (
      <main className="min-h-screen p-8">
        <pre className="text-sm">{error.message}</pre>
      </main>
    )
  }

  return (
    <main className="ws-member">
      <div className="ws-member-page">
        <div className="ws-member-hello">
          <div>
            <div className="ws-eyebrow">Library</div>
            <h1 className="ws-member-h1">Workout library</h1>
            <p className="ws-member-sub">
              Browse recordings by workout type and save your favorites.
            </p>
          </div>
          <Link className="ws-btn ws-btn-ghost" href="/">
            Home
          </Link>
        </div>

        <div className="ws-member-filters">
          <Link className={`ws-chip ${!type ? "is-active" : ""}`} href="/library">
            All
          </Link>
          {TYPES.map((t) => (
            <Link
              key={t}
              className={`ws-chip ${type === t ? "is-active" : ""}`}
              href={`/library?type=${encodeURIComponent(t)}`}
            >
              {t}
            </Link>
          ))}
        </div>

        <div className="ws-member-list">
          {[...DEMO_WORKOUTS, ...(data ?? [])]
            .filter((w) => !type || w.workout_type === type)
            .map((w) => (
              <a
                key={w.id}
                href={w.recording_url}
                target="_blank"
                rel="noreferrer"
                className="ws-member-row"
              >
                <div className="ws-member-row-thumb">▶</div>
                <div className="ws-member-row-body">
                  <div className="ws-eyebrow ws-eyebrow-small">{w.workout_type}</div>
                  <div className="ws-member-row-title">{w.title}</div>
                  <div className="ws-member-row-meta">
                    {"passcode" in w && w.passcode ? (
                      <span>Passcode: {w.passcode}</span>
                    ) : null}
                    {w.class_date ? (
                      <span>
                        {"passcode" in w && w.passcode ? " · " : ""}
                        {new Date(w.class_date).toLocaleDateString()}
                      </span>
                    ) : null}
                  </div>
                </div>
                <span className="ws-btn ws-btn-ghost ws-btn-small">Watch</span>
              </a>
            ))}

          {(!data || data.length === 0) && (
            <div className="ws-member-row">
              <div className="ws-member-row-body">
                <div className="ws-member-row-meta">
                  No workouts yet. Add one in Supabase to see it here.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
