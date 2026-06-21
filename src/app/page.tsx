import fs from "node:fs"
import path from "node:path"
import { ReviewRotator } from "@/components/ReviewRotator"
import { Hero } from "@/components/landing/Hero"
import { Method } from "@/components/landing/Method"
import { ScheduleSection } from "@/components/landing/ScheduleSection"
import { AboutSusan } from "@/components/landing/AboutSusan"
import { FaqSection } from "@/components/landing/FaqSection"
import { LandingFooter } from "@/components/landing/LandingFooter"

const reviewsPath = path.join(process.cwd(), "src", "reviews.txt")
const reviews = fs
  .readFileSync(reviewsPath, "utf8")
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean)

export default function HomePage() {
  return (
    <main className="ws-safe">
      <Hero />
      <Method />

      <section id="testimonials" className="safe-section safe-section-tint">
        <div className="safe-container">
          <div className="safe-testimonial-grid">
            <div>
              <div className="safe-eyebrow">From the class</div>
              <h2 className="safe-h2">What people love about Wicked Strong.</h2>
              <p className="safe-section-lead">
                Real notes from real members. The chat group is part of the program — these
                are the words that show up there every week.
              </p>
            </div>
            <div className="safe-testimonial-box">
              <ReviewRotator reviews={reviews} />
            </div>
          </div>
        </div>
      </section>

      <ScheduleSection />
      <AboutSusan />
      <FaqSection />
      <LandingFooter />
    </main>
  )
}
