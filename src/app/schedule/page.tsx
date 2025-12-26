import Link from "next/link"

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

export default function SchedulePage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
              Weekly schedule
            </p>
            <h1 className="font-display mt-4 text-3xl text-[color:var(--ws-ink)] sm:text-4xl">
              Consistent class times, new workouts each day.
            </h1>
            <p className="mt-3 text-sm text-[color:var(--ws-muted)]">
              Workouts change daily, but class times stay consistent. Times are listed in
              MT and ET so everyone can plan ahead.
            </p>
          </div>
          <Link
            href="/"
            className="rounded-full border border-black/10 px-4 py-2 text-sm hover:bg-black/5"
          >
            Home
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {WEEK_SCHEDULE.map((slot) => (
            <div
              key={`${slot.label}-${slot.time}`}
              className="rounded-3xl border border-black/10 bg-[color:var(--ws-pearl)] p-6 shadow-sm"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
                {slot.label}
              </div>
              <div className="mt-3 flex items-center justify-between">
                <h2 className="font-display text-xl text-[color:var(--ws-ink)]">
                  Time slot
                </h2>
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
