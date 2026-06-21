import Image from "next/image"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { signOut } from "@/app/login/actions"
import { ProgramSwitcher } from "@/components/program/ProgramSwitcher"

const publicNav = [
  { href: "/#home", label: "Home" },
  { href: "/#method", label: "Method" },
  { href: "/#schedule", label: "Schedule" },
  { href: "/about-susan", label: "About Susan" },
  { href: "/#faq", label: "FAQ" },
]

export async function SiteHeader() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const loggedIn = !!user
  const role = user?.app_metadata?.role ?? user?.user_metadata?.role
  const isPd = role === "pd_member"

  return (
    <header className="ws-header">
      <div className="ws-header-inner">
        <Link href="/" className="ws-header-brand">
          <Image src="/brand/ws-logo-color.png" alt="" width={36} height={36} priority />
          <span>Wicked Strong</span>
        </Link>

        <nav className="ws-header-nav" aria-label="Primary">
          {loggedIn ? (
            <>
              {isPd ? (
                <>
                  <Link className="ws-header-link" href="/pd/schedule">
                    Schedule
                  </Link>
                  <Link className="ws-header-link" href="/pd/library">
                    Library
                  </Link>
                  <Link className="ws-header-link" href="/pd/newsletter">
                    Resources
                  </Link>
                </>
              ) : (
                <>
                  <Link className="ws-header-link" href="/schedule">
                    Schedule
                  </Link>
                  <Link className="ws-header-link" href="/library">
                    Library
                  </Link>
                  <Link className="ws-header-link" href="/newsletter">
                    Newsletter
                  </Link>
                </>
              )}
              <Link className="ws-header-link" href="/about-susan">
                About Susan
              </Link>
            </>
          ) : (
            publicNav.map((n) => (
              <Link key={n.href} className="ws-header-link" href={n.href}>
                {n.label}
              </Link>
            ))
          )}
        </nav>

        <div className="ws-header-actions">
          {!loggedIn ? <ProgramSwitcher /> : null}
          {loggedIn ? (
            <form action={signOut}>
              <button type="submit" className="ws-btn ws-btn-ghost">
                Sign out
              </button>
            </form>
          ) : (
            <Link href="/login" className="ws-btn ws-btn-primary">
              Member login
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
