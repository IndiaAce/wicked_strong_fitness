"use client"

import Image from "next/image"
import { useProgram } from "@/components/program/ProgramProvider"
import { PROGRAMS, SUSAN } from "@/lib/program-content"

export function Hero() {
  const { program } = useProgram()
  const data = PROGRAMS[program]

  return (
    <section id="home" className="safe-hero">
      <div className="safe-container">
        <div className="safe-hero-grid">
          <div>
            <div className="safe-eyebrow">{data.hero.eyebrow}</div>
            <h1 className="safe-h1">{data.hero.title}</h1>
            <p className="safe-lead">{data.hero.sub}</p>
            <div className="safe-hero-ctas">
              <a className="safe-btn safe-btn-primary" href={`mailto:${SUSAN.email}`}>
                {data.hero.primaryCta}
              </a>
              <a className="safe-btn safe-btn-ghost" href="#method">
                {data.hero.secondaryCta}
              </a>
            </div>
            <div className="safe-hero-trust">
              {data.hero.trust.map((t) => (
                <div key={t.label}>
                  <strong>{t.value}</strong>
                  <span>{t.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="safe-hero-photo">
              <Image
                src="/brand/sw-ws-photo.webp"
                alt="Susan Wescott, founder and lead coach"
                fill
                className="object-cover"
                sizes="(max-width: 960px) 100vw, 45vw"
                priority
              />
              <div className="safe-hero-badge">
                <Image src="/brand/ws-logo-color.png" alt="" width={40} height={40} />
                <div>
                  <strong>{SUSAN.name}</strong>
                  <span>Founder + lead coach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
