import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">Wicked Strong</h1>
            <p className="mt-3 text-lg text-neutral-600">
              Online fitness classes and on-demand workouts.
            </p>
          </div>

          <Link
            href="/login"
            className="rounded-xl bg-black px-5 py-3 text-white hover:opacity-90"
          >
            Member login
          </Link>
        </div>
      </div>
    </main>
  )
}
