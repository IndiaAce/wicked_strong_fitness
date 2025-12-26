import Link from "next/link"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

const TYPES = ["cardio", "arms", "strength", "legs"] as const

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
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="font-display text-3xl font-semibold text-[color:var(--ws-ink)]">
              Workout Library
            </h1>
            <p className="mt-2 text-[color:var(--ws-muted)]">
              Browse recordings by workout type and save your favorites.
            </p>
          </div>

          <Link
            className="rounded-full border border-black/10 px-4 py-2 text-sm hover:bg-black/5"
            href="/"
          >
            Home
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link
            className={`rounded-full border border-black/10 px-4 py-2 text-sm ${
              !type
                ? "bg-[color:var(--ws-navy)] text-white"
                : "hover:bg-black/5"
            }`}
            href="/library"
          >
            All
          </Link>

          {TYPES.map((t) => (
            <Link
              key={t}
              className={`rounded-full border border-black/10 px-4 py-2 text-sm ${
                type === t
                  ? "bg-[color:var(--ws-navy)] text-white"
                  : "hover:bg-black/5"
              }`}
              href={`/library?type=${t}`}
            >
              {t}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-4">
          {(data ?? []).map((w) => (
            <a
              key={w.id}
              href={w.recording_url}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-black/10 bg-[color:var(--ws-pearl)] p-5 shadow-sm hover:bg-black/5"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--ws-muted)]">
                    {w.workout_type}
                  </div>
                  <div className="text-lg font-medium text-[color:var(--ws-ink)]">
                    {w.title}
                  </div>
                  {w.class_date ? (
                    <div className="mt-1 text-sm text-[color:var(--ws-muted)]">
                      {new Date(w.class_date).toLocaleDateString()}
                    </div>
                  ) : null}
                </div>
                <div className="text-sm text-[color:var(--ws-muted)]">Open</div>
              </div>
            </a>
          ))}

          {(!data || data.length === 0) && (
            <div className="rounded-2xl border border-black/10 bg-[color:var(--ws-pearl)] p-6 text-[color:var(--ws-muted)]">
              No workouts yet. Add one in Supabase to see it here.
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
