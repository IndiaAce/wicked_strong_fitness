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
    <main className="ws-member">
      <div className="ws-member-page">
        <div className="ws-member-hello">
          <div>
            <div className="ws-eyebrow">Wicked Strong PD</div>
            <h1 className="ws-member-h1">Resources &amp; updates</h1>
            <p className="ws-member-sub">
              Class updates, educational resources, and program newsletters for PD members.
            </p>
          </div>
          <Link href="/pd/schedule" className="ws-btn ws-btn-ghost">
            Schedule
          </Link>
        </div>

        <div className="ws-member-card" style={{ textAlign: "center", padding: "40px" }}>
          <h3>Resources coming soon</h3>
          <p className="ws-member-muted">
            Newsletters, tips, and educational materials for the PD program will be shared here.
          </p>
        </div>
      </div>
    </main>
  )
}
