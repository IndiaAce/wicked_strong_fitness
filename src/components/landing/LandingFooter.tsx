"use client"

import Image from "next/image"
import { useProgram } from "@/components/program/ProgramProvider"
import { PROGRAMS, SUSAN } from "@/lib/program-content"

export function LandingFooter() {
  const { program } = useProgram()
  const data = PROGRAMS[program]

  return (
    <footer className="safe-footer">
      <div className="safe-container safe-footer-inner">
        <div className="safe-footer-brand">
          <Image src="/brand/ws-logo-color.png" alt="" width={40} height={40} />
          <div>
            <strong>{data.name}</strong>
            <span>Be strong. Age with power.</span>
          </div>
        </div>
        <div className="safe-footer-meta">
          <a href={`mailto:${SUSAN.email}`}>{SUSAN.email}</a>
          <span>·</span>
          <span>© 2026 Wicked Strong Fitness</span>
        </div>
      </div>
    </footer>
  )
}
