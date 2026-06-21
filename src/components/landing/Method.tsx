"use client"

import { useProgram } from "@/components/program/ProgramProvider"
import { PROGRAMS } from "@/lib/program-content"

export function Method() {
  const { program } = useProgram()
  const data = PROGRAMS[program]

  return (
    <section id="method" className="safe-section">
      <div className="safe-container">
        <div className="safe-section-head">
          <div className="safe-eyebrow">The method</div>
          <h2 className="safe-h2">{data.method.title}</h2>
          <p className="safe-section-lead">{data.method.body}</p>
        </div>
        <div className="safe-pillars">
          {data.pillars.map((p, i) => (
            <div key={p.title} className="safe-pillar">
              <div className="safe-pillar-num">0{i + 1}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
