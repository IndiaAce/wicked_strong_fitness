import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="hero-glow absolute inset-0 -z-10" />
        <div className="absolute left-10 top-10 -z-10 h-40 w-40 rounded-full bg-[color:var(--ws-sky)]/20 blur-3xl floating-sheen" />
        <div className="absolute bottom-0 right-10 -z-10 h-56 w-56 rounded-full bg-[color:var(--ws-navy)]/20 blur-3xl floating-sheen" />

        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-24">
          <div className="max-w-2xl">
            <div className="fade-up inline-flex items-center gap-3 rounded-full border border-black/10 bg-[color:var(--ws-pearl)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ws-navy)] shadow-sm">
              Daily Online Classes - Community - Stregnth
            </div>
            <h1 className="font-display fade-up-delay mt-6 text-4xl font-semibold tracking-tight text-[color:var(--ws-ink)] sm:text-5xl lg:text-6xl">
              Wicked Strong is the daily rhythm for stronger bodies and calmer minds.
            </h1>
            <p className="fade-up-delay-2 mt-6 text-lg text-[color:var(--ws-muted)]">
              A modern appraoch to online fitness with live classes, a growing on-demand library, and a
              welcoming member community. Build consistency with curated 50-60 minute
              sessions that fit real life.
            </p>
            <div className="fade-up-delay-2 mt-8 flex flex-wrap gap-4">
              <Link
                href="/login"
                className="rounded-full bg-[color:var(--ws-navy)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:opacity-90"
              >
                Member login
              </Link>
              <Link
                href="/schedule"
                className="rounded-full border border-black/10 bg-[color:var(--ws-pearl)] px-6 py-3 text-sm font-semibold text-[color:var(--ws-ink)] hover:bg-black/5"
              >
                View schedule
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Weekly live classes", value: "12+" },
                { label: "On-demand sessions", value: "85+" },
                { label: "Member match rate", value: "94%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-black/5 bg-[color:var(--ws-pearl)] p-4"
                >
                  <div className="text-2xl font-semibold text-[color:var(--ws-navy)]">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--ws-muted)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 lg:items-end">
            <div className="relative flex items-center justify-center">
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-3xl bg-[color:var(--ws-sand)] shadow-lg" />
              <Image
                src="/brand/ws-logo-color.png"
                alt="Wicked Strong logo"
                width={180}
                height={180}
                className="relative z-10 drop-shadow-xl"
                priority
              />
            </div>
            <div className="max-w-sm rounded-3xl border border-black/10 bg-[color:var(--ws-pearl)] p-6 shadow-lg shadow-black/5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
                Coach spotlight
              </p>
              <p className="font-display mt-3 text-2xl text-[color:var(--ws-ink)]">
                "Move with intention. Strength is a feeling."
              </p>
              <p className="mt-2 text-sm text-[color:var(--ws-muted)]">
                - Susan, founder + lead coach
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
              The Wicked Strong method
            </p>
            <h2 className="font-display mt-4 text-3xl text-[color:var(--ws-ink)] sm:text-4xl">
              Stronger routines, softer landings.
            </h2>
            <p className="mt-4 text-base text-[color:var(--ws-muted)]">
              We mix cardio bursts, strength sequencing, and mindful cooldowns to help you
              stay consistent without burning out. Everything is designed for real schedules
              with classes you can actually make.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Live energy",
                  description: "Join your people on Zoom for weekly coached sessions.",
                },
                {
                  title: "On-demand library",
                  description: "Fresh recordings organized by focus and duration.",
                },
                {
                  title: "Accountability",
                  description: "Weekly check-ins and progress notes built into the program.",
                },
                {
                  title: "Community",
                  description: "A tight-knitt community to get wicked strong together with.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-[color:var(--ws-pearl)] p-5 shadow-sm"
                >
                  <div className="text-base font-semibold text-[color:var(--ws-ink)]">
                    {item.title}
                  </div>
                  <p className="mt-2 text-sm text-[color:var(--ws-muted)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-black/10 bg-[color:var(--ws-sand)] p-8 shadow-lg">
            <h3 className="font-display text-2xl text-[color:var(--ws-ink)]">
              What members are saying
            </h3>
            <div className="mt-6 space-y-6 text-sm text-[color:var(--ws-muted)]">
              <p>
                "The schedule makes it easy to stay consistent. The classes feel curated
                and personal even on busy weeks."
              </p>
              <p>
                "I love that I can swap into the library when travel hits. Still feels like
                I am in the studio."
              </p>
              <p>
                "The mix of strength and mobility is exactly what I needed for longevity."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-[color:var(--ws-pearl)] p-8 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
              Weekly schedule
            </p>
            <h3 className="font-display mt-4 text-2xl text-[color:var(--ws-ink)]">
              Class times that stay consistent every week.
            </h3>
            <p className="mt-3 text-sm text-[color:var(--ws-muted)]">
              Workouts change daily, but the live class times stay steady. All times are
              listed in EST so members can plan ahead.
            </p>
            <div className="mt-6 space-y-3 text-sm text-[color:var(--ws-muted)]">
              <div className="flex items-center justify-between border-b border-black/5 pb-2">
                <span>Monday - Saturday</span>
                <span className="font-semibold text-[color:var(--ws-ink)]">8:00 AM</span>
              </div>
              <div className="flex items-center justify-between border-b border-black/5 pb-2">
                <span>Tuesday & Thursday</span>
                <span className="font-semibold text-[color:var(--ws-ink)]">9:00 AM</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Stretch Class (Tue & Thu)</span>
                <span className="font-semibold text-[color:var(--ws-ink)]">6:00 PM</span>
              </div>
            </div>
            <Link
              href="/schedule"
              className="mt-6 inline-flex rounded-full bg-[color:var(--ws-navy)] px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Explore the full week
            </Link>
          </div>

          <div className="rounded-3xl border border-black/10 bg-[color:var(--ws-pearl)] p-8 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
              Newsletter
            </p>
            <h3 className="font-display mt-4 text-2xl text-[color:var(--ws-ink)]">
              Studio notes, highlights, and weekly wins.
            </h3>
            <p className="mt-3 text-sm text-[color:var(--ws-muted)]">
              Each week we share class highlights, member spotlights, and upcoming
              challenges. Past newsletters are saved in the PDF archive.
            </p>
            <div className="mt-6 rounded-2xl border border-black/10 bg-[color:var(--ws-pearl)] p-4 text-sm text-[color:var(--ws-muted)]">
              <div className="flex items-center justify-between">
                <span>April 7 - Spring Reset</span>
                <span className="text-[color:var(--ws-navy)]">PDF</span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span>March 31 - Stronger Days</span>
                <span className="text-[color:var(--ws-navy)]">PDF</span>
              </div>
            </div>
            <Link
              href="/newsletter"
              className="mt-6 inline-flex rounded-full border border-black/10 px-5 py-2 text-sm font-semibold text-[color:var(--ws-ink)] hover:bg-black/5"
            >
              Visit the newsletter hub
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
