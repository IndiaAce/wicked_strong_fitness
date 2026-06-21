"use client"

import Image from "next/image"
import { useProgram } from "./ProgramProvider"
import { SUSAN } from "@/lib/program-content"

// First-visit overlay: pick Fitness vs PD. Only shown once the client has
// mounted and the visitor hasn't already chosen (persisted in localStorage).
export function Splash() {
  const { chosen, mounted, setProgram } = useProgram()

  if (!mounted || chosen) return null

  return (
    <div className="ws-splash" role="dialog" aria-modal="true" aria-label="Choose a program">
      <div className="ws-splash-inner">
        <div className="ws-splash-brand">
          <Image src="/brand/ws-logo-color.png" alt="" width={48} height={48} />
          <span className="ws-splash-brandname">Wicked Strong</span>
        </div>
        <h1 className="ws-splash-title">
          Welcome.
          <br />
          Which class are you here for?
        </h1>
        <p className="ws-splash-sub">
          Pick once — we&apos;ll remember next time. You can switch any time from the header.
        </p>

        <div className="ws-splash-cards">
          <button className="ws-splash-card" onClick={() => setProgram("fitness")}>
            <div className="ws-splash-card-eyebrow">For everyone</div>
            <div className="ws-splash-card-title">Wicked Strong</div>
            <div className="ws-splash-card-desc">
              Strength, mobility and community for adults who want to age with power. Six
              classes a week, live and on-demand.
            </div>
            <div className="ws-splash-card-cta">
              Enter Fitness <span aria-hidden>→</span>
            </div>
          </button>

          <button className="ws-splash-card" onClick={() => setProgram("pd")}>
            <div className="ws-splash-card-eyebrow">For people living with Parkinson&apos;s</div>
            <div className="ws-splash-card-title">Wicked Strong PD</div>
            <div className="ws-splash-card-desc">
              A specialized virtual program for balance, strength and confidence.
              Boxing-inspired, caregiver-friendly, modified for every level.
            </div>
            <div className="ws-splash-card-cta">
              Enter PD <span aria-hidden>→</span>
            </div>
          </button>
        </div>

        <div className="ws-splash-foot">
          Both programs are taught by Susan Wescott · <a href={`mailto:${SUSAN.email}`}>{SUSAN.email}</a>
        </div>
      </div>
    </div>
  )
}
