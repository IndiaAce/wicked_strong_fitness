import Link from "next/link"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export default async function PDResourcesPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect("/login")

  const role = user.app_metadata?.role ?? user.user_metadata?.role
  if (role !== "pd_member") redirect("/")

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
              Wicked Strong PD
            </p>
            <h1 className="font-display mt-4 text-3xl text-[color:var(--ws-ink)] sm:text-4xl">
              Resources &amp; Updates
            </h1>
            <p className="mt-3 text-sm text-[color:var(--ws-muted)]">
              Class updates, educational resources, and program newsletters for PD members.
            </p>
          </div>
          <Link
            href="/pd/schedule"
            className="rounded-full border border-black/10 px-4 py-2 text-sm hover:bg-black/5"
          >
            Schedule
          </Link>
        </div>

        <div className="mt-10 rounded-3xl border border-black/10 bg-[color:var(--ws-pearl)] p-10 text-center">
          <p className="font-display text-xl text-[color:var(--ws-ink)]">Resources coming soon</p>
          <p className="mt-2 text-sm text-[color:var(--ws-muted)]">
            Newsletters, tips, and educational materials for the PD program will be shared here.
          </p>
        </div>
      </div>
    </main>
  )
}
