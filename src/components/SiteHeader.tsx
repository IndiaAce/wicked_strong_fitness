import Image from "next/image"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/ws-logo-color.png"
            alt="Wicked Strong"
            width={44}
            height={44}
            priority
          />
          <span className="text-sm font-semibold tracking-wide text-white">
            Wicked Strong
          </span>
        </Link>

        <nav className="flex items-center gap-3">
          <Link
            href="/library"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/5"
          >
            Library
          </Link>
          <Link
            href="/login"
            className="rounded-xl bg-[color:var(--ws-navy)] px-4 py-2 text-sm text-white hover:opacity-90"
          >
            Member login
          </Link>
        </nav>
      </div>
    </header>
  )
}
