import Image from "next/image"
import Link from "next/link"
import { SUSAN } from "@/lib/program-content"

export default function AboutSusanPage() {
  return (
    <main className="ws-safe">
      <section className="safe-section">
        <div className="safe-container">
          <div className="safe-about-grid">
            <div className="safe-about-photo">
              <Image
                src="/brand/sw-ws-photo.webp"
                alt="Susan Wescott"
                fill
                className="object-cover"
                sizes="(max-width: 900px) 100vw, 40vw"
                priority
              />
            </div>
            <div>
              <div className="safe-eyebrow">About Susan</div>
              <h1 className="safe-h2">Founder, coach, and the heart of Wicked Strong.</h1>
              {SUSAN.paragraphs.map((p, i) => (
                <p key={i} className="safe-body">
                  {p}
                </p>
              ))}
              <p className="safe-signoff">{SUSAN.signoff}</p>
              <div className="safe-creds">
                {SUSAN.credentials.map((c) => (
                  <span key={c} className="safe-cred">
                    {c}
                  </span>
                ))}
              </div>
              <div className="safe-hero-ctas" style={{ marginTop: "28px" }}>
                <a className="safe-btn safe-btn-primary" href={`mailto:${SUSAN.email}`}>
                  Email Susan
                </a>
                <Link className="safe-btn safe-btn-ghost" href="/login">
                  Member login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
