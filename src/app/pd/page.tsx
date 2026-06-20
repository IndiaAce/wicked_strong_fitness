import Link from "next/link"

const HIGHLIGHTS = [
  "Live, instructor-led virtual classes",
  "Focus on balance, strength, mobility, and coordination",
  "Boxing-inspired training — no experience needed",
  "Cognitive and functional movement exercises",
  "All levels welcome — exercises can always be modified",
  "Caregivers encouraged to participate",
]

const BENEFITS = [
  "Improve balance and reduce fall risk",
  "Increase strength and mobility",
  "Enhance coordination and daily function",
  "Support cognitive engagement",
  "Build confidence and independence",
]

const CLASS_DAYS = [
  { days: "Monday & Tuesday", note: "Live virtual class" },
  { days: "Thursday & Friday", note: "Live virtual class" },
  { days: "Saturday", note: "Live virtual class" },
]

export default function WickedStrongPDPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero-glow absolute inset-0 -z-10" />
        <div className="absolute left-10 top-10 -z-10 h-40 w-40 rounded-full bg-[color:var(--ws-sky)]/20 blur-3xl floating-sheen" />
        <div className="absolute bottom-0 right-10 -z-10 h-56 w-56 rounded-full bg-[color:var(--ws-navy)]/20 blur-3xl floating-sheen" />

        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-[color:var(--ws-pearl)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ws-navy)] shadow-sm">
            Now Accepting New Participants
          </div>
          <h1 className="font-display mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-[color:var(--ws-ink)] sm:text-5xl lg:text-6xl">
            Wicked Strong PD
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-[color:var(--ws-muted)]">
            Specialized virtual exercise classes focused on balance, strength, mobility, and functional movement for individuals living with Parkinson's Disease.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/login"
              className="rounded-full bg-[color:var(--ws-navy)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:opacity-90"
            >
              Member login
            </Link>
            <a
              href="mailto:susan@wickedstrongfitness.com"
              className="rounded-full border border-black/10 bg-[color:var(--ws-pearl)] px-6 py-3 text-sm font-semibold text-[color:var(--ws-ink)] hover:bg-black/5"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Program Highlights + Benefits */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-[color:var(--ws-pearl)] p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
              Program highlights
            </p>
            <h2 className="font-display mt-4 text-2xl text-[color:var(--ws-ink)]">
              What to expect
            </h2>
            <ul className="mt-6 space-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[color:var(--ws-muted)]">
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[color:var(--ws-navy)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-black/10 bg-[color:var(--ws-sand)] p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
              Benefits
            </p>
            <h2 className="font-display mt-4 text-2xl text-[color:var(--ws-ink)]">
              Regular participation may help:
            </h2>
            <ul className="mt-6 space-y-3">
              {BENEFITS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[color:var(--ws-muted)]">
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[color:var(--ws-navy)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* About Susan */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-black/10 bg-[color:var(--ws-pearl)] p-8 shadow-sm lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
                Your instructor
              </p>
              <h2 className="font-display mt-4 text-3xl text-[color:var(--ws-ink)]">
                Susan Wescott
              </h2>
              <p className="mt-3 text-base text-[color:var(--ws-muted)]">
                Personal Trainer &amp; Group Exercise Instructor with 40+ years of experience — and 8 years dedicated to helping individuals with Parkinson's stay strong, mobile, and confident.
              </p>
              <Link
                href="/about-susan"
                className="mt-6 inline-flex rounded-full border border-black/10 px-5 py-2 text-sm font-semibold text-[color:var(--ws-ink)] hover:bg-black/5"
              >
                Full bio
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                "Certified Parkinson's Exercise Specialist",
                "Certified through USA Boxing & Rock Steady Boxing",
                "8 years working with the Parkinson's community",
              ].map((cert) => (
                <div
                  key={cert}
                  className="rounded-2xl border border-black/5 bg-white/60 p-4 text-sm text-[color:var(--ws-ink)]"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Class Schedule Info */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-black/10 bg-[color:var(--ws-sand)] p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
            Class info
          </p>
          <h2 className="font-display mt-4 text-2xl text-[color:var(--ws-ink)]">
            Join safely from home, five days a week.
          </h2>
          <p className="mt-2 text-sm text-[color:var(--ws-muted)]">
            Light weights and a chair are recommended. Boxing gloves optional.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {CLASS_DAYS.map((slot) => (
              <div
                key={slot.days}
                className="rounded-2xl border border-black/10 bg-[color:var(--ws-pearl)] p-5 shadow-sm"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
                  {slot.days}
                </div>
                <p className="mt-2 text-sm text-[color:var(--ws-muted)]">{slot.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/login"
              className="rounded-full bg-[color:var(--ws-navy)] px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Sign in to access your classes
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
