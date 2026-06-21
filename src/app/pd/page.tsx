import Link from "next/link"

const HIGHLIGHTS = [
  "Live, instructor-led virtual classes",
  "Focus on balance, strength, mobility, and coordination",
  "Boxing-inspired training — no experience needed",
  "Cognitive and functional movement exercises",
  "All levels welcome — exercises can always be modified",
  "Caregivers encouraged to participate",
]

const BENEFITS = [
  "Improve balance and reduce fall risk",
  "Increase strength and mobility",
  "Enhance coordination and daily function",
  "Support cognitive engagement",
  "Build confidence and independence",
]

const CLASS_DAYS = [
  { days: "Monday & Tuesday", note: "Live virtual class" },
  { days: "Thursday & Friday", note: "Live virtual class" },
  { days: "Saturday", note: "Live virtual class" },
]

export default function WickedStrongPDPage() {
  return (
    <main className="ws-safe">
      {/* Hero */}
      <section className="safe-hero">
        <div className="safe-container">
          <div className="safe-eyebrow">Now accepting new participants</div>
          <h1 className="safe-h1">Wicked Strong PD</h1>
          <p className="safe-lead">
            Specialized virtual exercise classes focused on balance, strength, mobility, and
            functional movement for individuals living with Parkinson&apos;s Disease.
          </p>
          <div className="safe-hero-ctas">
            <Link href="/login" className="safe-btn safe-btn-primary">
              Member login
            </Link>
            <a href="mailto:susan.yogafitness@gmail.com" className="safe-btn safe-btn-ghost">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Program Highlights + Benefits */}
      <section className="safe-section">
        <div className="safe-container">
          <div className="safe-about-grid">
            <div>
              <div className="safe-eyebrow">Program highlights</div>
              <h2 className="safe-h2">What to expect</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                {HIGHLIGHTS.map((item) => (
                  <li key={item} className="safe-body" style={{ margin: 0 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="safe-eyebrow">Benefits</div>
              <h2 className="safe-h2">Regular participation may help:</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                {BENEFITS.map((item) => (
                  <li key={item} className="safe-body" style={{ margin: 0 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Your instructor */}
      <section className="safe-section safe-section-tint">
        <div className="safe-container">
          <div className="safe-section-head">
            <div className="safe-eyebrow">Your instructor</div>
            <h2 className="safe-h2">Susan Wescott</h2>
            <p className="safe-section-lead">
              Personal Trainer &amp; Group Exercise Instructor with 40+ years of experience —
              and 8 years dedicated to helping individuals with Parkinson&apos;s stay strong,
              mobile, and confident.
            </p>
          </div>
          <div className="safe-creds">
            {[
              "Certified Parkinson's Exercise Specialist",
              "Certified through USA Boxing & Rock Steady Boxing",
              "8 years working with the Parkinson's community",
            ].map((cert) => (
              <span key={cert} className="safe-cred">
                {cert}
              </span>
            ))}
          </div>
          <div style={{ marginTop: "24px" }}>
            <Link href="/about-susan" className="safe-btn safe-btn-ghost">
              Full bio
            </Link>
          </div>
        </div>
      </section>

      {/* Class schedule info */}
      <section className="safe-section">
        <div className="safe-container">
          <div className="safe-section-head">
            <div className="safe-eyebrow">Class info</div>
            <h2 className="safe-h2">Join safely from home, five days a week.</h2>
            <p className="safe-section-lead">
              Light weights and a chair are recommended. Boxing gloves optional.
            </p>
          </div>
          <div className="safe-pillars" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {CLASS_DAYS.map((slot) => (
              <div key={slot.days} className="safe-pillar">
                <div className="safe-pillar-num">{slot.days}</div>
                <p style={{ marginTop: "10px" }}>{slot.note}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "32px" }}>
            <Link href="/login" className="safe-btn safe-btn-primary">
              Sign in to access your classes
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
