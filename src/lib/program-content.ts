// Marketing content for the public site, ported from the Claude Design
// prototype (content.jsx). Same data, two programs. Pricing and the mock
// member-dashboard data are intentionally omitted (out of scope / invite-only).

export type ProgramId = "fitness" | "pd"

export type ScheduleDay = {
  day: string
  time: string
  note: string
}

export type Program = {
  id: ProgramId
  name: string
  shortName: string
  hero: {
    eyebrow: string
    title: string
    sub: string
    primaryCta: string
    secondaryCta: string
    trust: { value: string; label: string }[]
  }
  pillars: { title: string; body: string }[]
  method: { title: string; body: string }
  schedule: { title: string; body: string; week: ScheduleDay[] }
  faq: { q: string; a: string }[]
}

export const FITNESS: Program = {
  id: "fitness",
  name: "Wicked Strong",
  shortName: "Fitness",
  hero: {
    eyebrow: "Daily online classes · Community · Strength",
    title: "Be strong, live long, age with power.",
    sub: "A strength-based program for adults who want to stay capable, confident, and powerful through every decade. Real training for real bodies — guided by 40 years of coaching.",
    primaryCta: "Request a trial week",
    secondaryCta: "See how it works",
    trust: [
      { value: "40+", label: "years coaching" },
      { value: "6×", label: "classes / week" },
      { value: "2020", label: "since" },
    ],
  },
  pillars: [
    { title: "Progressive strength", body: "Lift heavier than you thought you could. Six classes a week, built so you can train consistently and see results." },
    { title: "Smart movement", body: "Mobility, balance and recovery built into every block. We move well so we can keep moving." },
    { title: "Real community", body: "Show up on Zoom and see your people. The chat, the check-ins, the regulars — that's the secret ingredient." },
    { title: "Always modified", body: "Every exercise has a version that meets you where you are. Susan coaches the room, not the program." },
  ],
  method: {
    title: "The Wicked Strong method",
    body: "Wicked Strong focuses on strength, functional fitness, and recovery designed for real life. Every class is built so you can train consistently, feel strong, and keep moving. Whether you're lifting heavier than you ever thought you could or focusing on movement, stability, and mobility — every class helps you stay capable, confident, and powerful as you age.",
  },
  schedule: {
    title: "Consistent class times, new workouts every day.",
    body: "Class times stay the same every week so you can build your routine. Workouts change daily — variety is the whole point.",
    week: [
      { day: "Monday", time: "7:00 AM MT", note: "Strength + conditioning" },
      { day: "Tuesday", time: "8:00 AM MT", note: "Mobility, strength + stretch" },
      { day: "Wednesday", time: "7:00 AM MT", note: "High reps + cardio" },
      { day: "Thursday", time: "8:00 AM MT", note: "Standing core + balance" },
      { day: "Friday", time: "7:00 AM MT", note: "Strength + power" },
      { day: "Saturday", time: "8:00 AM MT", note: "Long format + recovery" },
    ],
  },
  faq: [
    { q: "Do I need to be fit already?", a: "No. Susan coaches the room, not a program — every exercise has a scaled version, and you'll move at your own pace. Most members start somewhere in the middle." },
    { q: "What equipment do I need?", a: "Light dumbbells, a mat and a sturdy chair will get you through every class. Heavier weights and resistance bands are nice to have as you progress." },
    { q: "Can I attend if I can't make the live class?", a: "Yes. Every class is recorded and added to the library the same day, organized by focus and duration." },
    { q: "How do I become a member?", a: "Membership is invite-only and managed by Susan. Request a trial below — if it's a fit, Susan will send your invite code." },
    { q: "What if I have an injury?", a: "Tell Susan before your first class. She'll work with you on modifications so you can train safely around whatever's going on." },
  ],
}

export const PD: Program = {
  id: "pd",
  name: "Wicked Strong PD",
  shortName: "PD",
  hero: {
    eyebrow: "Now accepting new participants · Free trial",
    title: "Feel new every day.",
    sub: "Wicked Strong PD is a specialized virtual exercise program built around balance, strength, mobility and functional movement for people living with Parkinson's Disease. Boxing-inspired, cognitively engaging, and modified for every level.",
    primaryCta: "Join a free trial",
    secondaryCta: "What to expect",
    trust: [
      { value: "8+", label: "years coaching PD" },
      { value: "5×", label: "classes / week" },
      { value: "RSB", label: "certified" },
    ],
  },
  pillars: [
    { title: "Balance + mobility", body: "Targeted work to reduce fall risk and keep you moving with confidence through your day." },
    { title: "Boxing-inspired", body: "Rock Steady-style training that builds power, coordination and a little bit of swagger. No experience needed." },
    { title: "Cognitive engagement", body: "Movement patterns and sequencing that ask your brain to work alongside your body." },
    { title: "Caregivers welcome", body: "Partners and caregivers are encouraged to join. It's good for them too — and good for both of you." },
  ],
  method: {
    title: "What a class looks like",
    body: "Live, instructor-led virtual classes focused on balance, strength, mobility and coordination. Boxing-inspired training combined with cognitive and functional movement work. All levels welcome — exercises can always be modified. Caregivers are encouraged to participate alongside you.",
  },
  schedule: {
    title: "Five days a week, from your living room.",
    body: "Consistent class times so you can plan your week. Light weights and a chair are recommended. Boxing gloves are optional.",
    week: [
      { day: "Monday", time: "10:00 AM MT", note: "Balance + functional movement" },
      { day: "Tuesday", time: "10:00 AM MT", note: "Boxing-inspired strength" },
      { day: "Wednesday", time: "Rest day", note: "No class — recover and stretch" },
      { day: "Thursday", time: "10:00 AM MT", note: "Coordination + cognitive" },
      { day: "Friday", time: "10:00 AM MT", note: "Strength + mobility" },
      { day: "Saturday", time: "10:00 AM MT", note: "Long format + community" },
    ],
  },
  faq: [
    { q: "I've never exercised with PD before — is this for me?", a: "Yes. Wicked Strong PD is built for people across the full range of Parkinson's progression. All exercises can be modified, and most can be done seated if needed." },
    { q: "What if I fall or feel unsteady?", a: "Susan will guide you to keep a sturdy chair within arm's reach during every class. You can use it for support whenever you need to — it's part of the program, not a fallback." },
    { q: "Do I need boxing gloves?", a: "Nope. Gloves are nice to have if you want them, but every boxing movement can be done with hand wraps or just open hands." },
    { q: "Can my partner or caregiver join me?", a: "Absolutely. We strongly encourage caregivers to participate — the caregiver bundle is built for two people from the same household." },
    { q: "What are Susan's PD credentials?", a: "Susan is a Certified Parkinson's Exercise Specialist and certified through USA Boxing and Rock Steady Boxing, with 8+ years working specifically with the Parkinson's community." },
  ],
}

export const PROGRAMS: Record<ProgramId, Program> = {
  fitness: FITNESS,
  pd: PD,
}

export const SUSAN = {
  name: "Susan Wescott",
  title: "Founder + Lead Coach",
  email: "susan.yogafitness@gmail.com",
  paragraphs: [
    "Hi, I'm Susan — founder and coach behind Wicked Strong.",
    "I've been teaching and coaching for over 40 years, working with adults who want to feel strong, steady and confident in their bodies as they age. Wicked Strong grew out of that work, and out of my belief that strength training is one of the most important tools we have for maintaining independence, mobility and quality of life.",
    "My coaching style is thoughtful, encouraging and grounded in real-world movement. I focus on progressive strength training, smart modifications and building confidence over time. Every class is designed to meet people where they are while helping them safely grow stronger — physically and mentally.",
    "Wicked Strong is the program I would choose for myself. It's not about trends or extremes, but about consistent, well-coached strength training that supports you now and for the years ahead.",
  ],
  signoff: "Be strong. Age with power.",
  credentials: [
    "40+ years coaching",
    "Certified Parkinson's Exercise Specialist",
    "USA Boxing Coach",
    "Rock Steady Boxing Certified",
  ],
}
