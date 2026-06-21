import Image from "next/image"
import { SUSAN } from "@/lib/program-content"

export function AboutSusan() {
  return (
    <section id="about" className="safe-section safe-section-tint">
      <div className="safe-container">
        <div className="safe-about-grid">
          <div className="safe-about-photo">
            <Image
              src="/brand/sw-ws-photo.webp"
              alt="Susan Wescott"
              fill
              className="object-cover"
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          <div>
            <div className="safe-eyebrow">About Susan</div>
            <h2 className="safe-h2">Founder, coach, and the heart of Wicked Strong.</h2>
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
          </div>
        </div>
      </div>
    </section>
  )
}
