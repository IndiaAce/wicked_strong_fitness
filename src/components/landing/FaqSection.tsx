"use client"

import { useState } from "react"
import { useProgram } from "@/components/program/ProgramProvider"
import { PROGRAMS, SUSAN } from "@/lib/program-content"

export function FaqSection() {
  const { program } = useProgram()
  const data = PROGRAMS[program]
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="safe-section">
      <div className="safe-container">
        <div className="ws-faq-grid">
          <div>
            <div className="safe-eyebrow">FAQ</div>
            <h2 className="safe-h2">Questions, answered.</h2>
            <p className="safe-section-lead">
              Still wondering something?{" "}
              <a href={`mailto:${SUSAN.email}`}>Email Susan</a> — she answers every message
              herself.
            </p>
          </div>
          <div className="ws-faq">
            {data.faq.map((f, i) => (
              <div key={f.q} className={`ws-faq-item ${open === i ? "is-open" : ""}`}>
                <button
                  className="ws-faq-q"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span>{f.q}</span>
                  <span className="ws-faq-icon" aria-hidden>
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                {open === i && <div className="ws-faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
