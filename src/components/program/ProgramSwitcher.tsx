"use client"

import { useEffect, useRef, useState } from "react"
import { useProgram } from "./ProgramProvider"

// Header dropdown that flips the public marketing content between
// Fitness and PD. Purely a marketing concern — independent of auth.
export function ProgramSwitcher() {
  const { program, mounted, setProgram } = useProgram()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", close)
    return () => document.removeEventListener("mousedown", close)
  }, [])

  // Avoid a hydration flash: render the SSR default ("Fitness") until mounted.
  const label = !mounted || program === "fitness" ? "Fitness" : "PD"

  return (
    <div className="ws-switcher" ref={ref}>
      <button
        className="ws-switcher-btn"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <span className="ws-switcher-dot" data-prog={program} />
        {label}
        <span className="ws-switcher-caret" aria-hidden>
          ▾
        </span>
      </button>
      {open && (
        <div className="ws-switcher-menu" role="menu">
          <div className="ws-switcher-label">Switch program</div>
          <button
            onClick={() => {
              setProgram("fitness")
              setOpen(false)
            }}
            className={program === "fitness" ? "is-active" : ""}
          >
            <div className="ws-switcher-name">Wicked Strong</div>
            <div className="ws-switcher-desc">Strength + mobility</div>
          </button>
          <button
            onClick={() => {
              setProgram("pd")
              setOpen(false)
            }}
            className={program === "pd" ? "is-active" : ""}
          >
            <div className="ws-switcher-name">Wicked Strong PD</div>
            <div className="ws-switcher-desc">For people living with PD</div>
          </button>
        </div>
      )}
    </div>
  )
}
