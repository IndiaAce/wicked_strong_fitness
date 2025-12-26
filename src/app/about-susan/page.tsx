import Image from "next/image"
import Link from "next/link"

export default function AboutSusanPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
              About Susan
            </p>
            <h1 className="font-display mt-4 text-3xl text-[color:var(--ws-ink)] sm:text-4xl">
              Founder, coach, and the heart behind Wicked Strong.
            </h1>
            <p className="mt-3 text-sm text-[color:var(--ws-muted)]">
              Strength training for real bodies, built with decades of coaching experience.
            </p>
          </div>
          <Link
            href="/"
            className="rounded-full border border-black/10 px-4 py-2 text-sm hover:bg-black/5"
          >
            Home
          </Link>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-3xl border border-black/10 bg-[color:var(--ws-pearl)] p-6 shadow-lg">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[color:var(--ws-sand)]">
              <Image
                src="/brand/sw-ws-photo.png"
                alt="Susan Wescott"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
              Be strong. Age with power.
            </p>
          </div>

          <div className="space-y-6 rounded-3xl border border-black/10 bg-[color:var(--ws-pearl)] p-8 shadow-lg">
            <p className="text-base text-[color:var(--ws-muted)]">
              Hi, I am Susan Wescott - founder and coach behind Wicked Strong.
            </p>
            <p className="text-base text-[color:var(--ws-muted)]">
              I have been teaching and coaching for over 40 years, working with adults who
              want to feel strong, steady, and confident in their bodies as they age.
              Wicked Strong grew from this experience and from my belief that strength
              training is one of the most important tools we have for maintaining
              independence, mobility, and quality of life.
            </p>
            <p className="text-base text-[color:var(--ws-muted)]">
              My coaching style is thoughtful, encouraging, and grounded in real-world
              movement. I focus on progressive strength training, smart modifications, and
              building confidence over time. Every class is designed to meet people where
              they are while helping them safely grow stronger - physically and mentally.
            </p>
            <p className="text-base text-[color:var(--ws-muted)]">
              Wicked Strong is the program I would choose for myself. It is not about
              trends or extremes, but about consistent, well-coached strength training that
              supports you now and for the years ahead.
            </p>
            <p className="text-base font-semibold text-[color:var(--ws-ink)]">
              Be strong. Age with power.
            </p>
            <div className="rounded-2xl border border-black/10 bg-[color:var(--ws-sand)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
                Contact Susan
              </p>
              <p className="mt-2 text-sm text-[color:var(--ws-muted)]">
                Email:{" "}
                <a
                  href="mailto:susan.yogafitness@gmail.com"
                  className="font-semibold text-[color:var(--ws-ink)] underline-offset-4 hover:underline"
                >
                  susan.yogafitness@gmail.com
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/schedule"
                className="rounded-full bg-[color:var(--ws-navy)] px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
              >
                View schedule
              </Link>
              <Link
                href="/login"
                className="rounded-full border border-black/10 px-5 py-2 text-sm font-semibold text-[color:var(--ws-ink)] hover:bg-black/5"
              >
                Member login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
