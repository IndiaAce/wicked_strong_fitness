import Link from "next/link"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

const TYPES = ["cardio", "arms", "strength", "legs"] as const

export default async function LibraryPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>
}) {
  const sp = await searchParams
  const type =
    sp.type && (TYPES as readonly string[]).includes(sp.type) ? sp.type : null

  const supabase = await createClient()
  const { data: claims } = await supabase.auth.getClaims()
  if (!claims) redirect("/login")

  const q = supabase
    .from("workouts")
    .select("id,title,workout_type,recording_url,created_at,class_date")
    .order("created_at", { ascending: false })

    const { data, error } = await supabase
    .from("workouts")
    .select("id,title,workout_type,recording_url,created_at,class_date")
    .order("created_at", { ascending: false })  
    ? await q.eq("workout_type", type)
    : await q

  if (error) {
    return (
      <main className="min-h-screen p-8">
        <pre className="text-sm">{error.message}</pre>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex items-start justify-between gap-6">
          <div>
          <h1 className="text-3xl font-semibold text-[color:var(--ws-sky)]">Workout Library</h1>
            <p className="mt-2 text-neutral-600">
              Browse recordings by workout type.
            </p>
          </div>

          <Link className="rounded-xl border px-4 py-2 hover:bg-neutral-50" href="/">
            Home
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link
            className={`rounded-full border px-4 py-2 ${
              !type ? "bg-[color:var(--ws-navy)] text-white" : "hover:bg-neutral-50"
            }`}
            href="/library"
          >
            All
          </Link>

          {TYPES.map((t) => (
            <Link
              key={t}
              className={`rounded-full border px-4 py-2 ${
                type === t ? "bg-[color:var(--ws-navy)] text-white" : "hover:bg-neutral-50"
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
              className="rounded-2xl border p-5 hover:bg-neutral-50"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm text-neutral-500">{w.workout_type}</div>
                  <div className="text-lg font-medium">{w.title}</div>
                  {w.class_date ? (
                    <div className="mt-1 text-sm text-neutral-600">
                      {new Date(w.class_date).toLocaleDateString()}
                    </div>
                  ) : null}
                </div>
                <div className="text-sm text-neutral-600">Open</div>
              </div>
            </a>
          ))}

          {(!data || data.length === 0) && (
            <div className="rounded-2xl border p-6 text-neutral-600">
              No workouts yet. Add one in Supabase to see it here.
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
