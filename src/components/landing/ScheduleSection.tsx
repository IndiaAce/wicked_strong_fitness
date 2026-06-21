"use client"

import { useState } from "react"
import { useProgram } from "@/components/program/ProgramProvider"
import { PROGRAMS } from "@/lib/program-content"

export function ScheduleSection() {
  const { program } = useProgram()
  const data = PROGRAMS[program]
  const week = data.schedule.week
  const [active, setActive] = useState(0)
  const current = week[Math.min(active, week.length - 1)]

  return (
    <section id="schedule" className="safe-section">
      <div className="safe-container">
        <div className="safe-section-head">
          <div className="safe-eyebrow">Schedule</div>
          <h2 className="safe-h2">{data.schedule.title}</h2>
          <p className="safe-section-lead">{data.schedule.body}</p>
        </div>
        <div className="ws-schedule">
          <div className="ws-schedule-days">
            {week.map((d, i) => (
              <button
                key={d.day}
                className={`ws-schedule-day ${active === i ? "is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="ws-schedule-day-name">{d.day.slice(0, 3)}</span>
                <span className="ws-schedule-day-time">
                  {d.time === "Rest day" ? "Rest" : d.time.replace(" AM MT", "")}
                </span>
              </button>
            ))}
          </div>
          <div className="ws-schedule-detail">
            <div className="safe-eyebrow">{current.day}</div>
            <div className="ws-schedule-detail-title">{current.note}</div>
            <div className="ws-schedule-detail-time">{current.time}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
