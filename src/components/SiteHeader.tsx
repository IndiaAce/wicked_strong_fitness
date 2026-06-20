import Image from "next/image"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { signOut } from "@/app/login/actions"

export async function SiteHeader() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const loggedIn = !!user
  const role = user?.app_metadata?.role ?? user?.user_metadata?.role
  const isPd = role === "pd_member"

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[color:var(--ws-pearl)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/ws-logo-color.png"
            alt="Wicked Strong"
            width={56}
            height={56}
            priority
          />
          <span className="font-display text-lg font-semibold tracking-wide text-[color:var(--ws-ink)]">
            Wicked Strong
          </span>
        </Link>

        <nav className="hidden items-center gap-3 text-sm font-medium text-[color:var(--ws-ink)] md:flex">
          {loggedIn && isPd ? (
            <Link className="rounded-full px-4 py-2 hover:bg-black/5" href="/pd/schedule">
              Schedule
            </Link>
          ) : null}
          {loggedIn && isPd ? (
            <Link className="rounded-full px-4 py-2 hover:bg-black/5" href="/pd/library">
              Library
            </Link>
          ) : null}
          {loggedIn && isPd ? (
            <Link className="rounded-full px-4 py-2 hover:bg-black/5" href="/pd/newsletter">
              Resources
            </Link>
          ) : null}
          {loggedIn && !isPd ? (
            <Link className="rounded-full px-4 py-2 hover:bg-black/5" href="/schedule">
              Schedule
            </Link>
          ) : null}
          <Link className="rounded-full px-4 py-2 hover:bg-black/5" href="/about-susan">
            About Susan
          </Link>
          {loggedIn && !isPd ? (
            <Link
              className="rounded-full px-4 py-2 hover:bg-black/5"
              href="/newsletter"
            >
              Newsletter
            </Link>
          ) : null}
          {loggedIn && !isPd ? (
            <Link
              href="/library"
              className="rounded-full px-4 py-2 hover:bg-black/5"
            >
              Library
            </Link>
          ) : null}
          {loggedIn ? (
            <form action={signOut}>
              <button
                type="submit"
                className="rounded-full bg-[color:var(--ws-navy)] px-4 py-2 text-white hover:opacity-90"
              >
                Log out
              </button>
            </form>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-[color:var(--ws-navy)] px-4 py-2 text-white hover:opacity-90"
            >
              Member login
            </Link>
          )}
        </nav>
        {loggedIn ? (
          <form action={signOut} className="md:hidden">
            <button
              type="submit"
              className="rounded-full bg-[color:var(--ws-navy)] px-4 py-2 text-sm text-white hover:opacity-90"
            >
              Log out
            </button>
          </form>
        ) : (
          <Link
            href="/login"
            className="rounded-full bg-[color:var(--ws-navy)] px-4 py-2 text-sm text-white hover:opacity-90 md:hidden"
          >
            Member login
          </Link>
        )}
      </div>
    </header>
  )
}
