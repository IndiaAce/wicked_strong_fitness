# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

No test runner is configured.

## Architecture

**Wicked Strong** is a Next.js 16 (App Router) fitness platform for a strength-based online program. Members access live class schedules, a workout library, and newsletters after logging in.

**Stack**: Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 + Supabase

### Member Roles

There are two member types, distinguished by the `role` field on the Supabase user:

| Role | Redirect after login | Access |
|---|---|---|
| _(default)_ | `/` | `/schedule`, `/library`, `/newsletter` |
| `pd_member` | `/pd/schedule` | `/pd/schedule`, `/pd/library`, `/pd/newsletter` |

Role is read via `user.app_metadata.role ?? user.user_metadata.role`. The `pd_member` check gates the entire `/pd/*` subtree — each page redirects to `/` if the role doesn't match.

### Auth

Auth is handled entirely by Supabase. The pattern used throughout:

- **Server components/pages**: call `createClient()` from `@/lib/supabase/server`, then `supabase.auth.getUser()`. If unauthenticated, redirect to `/login`.
- **Client components**: call `createBrowserClient()` from `@/lib/supabase/client`.
- **Middleware** (`src/middleware.ts` → `src/lib/supabase/middleware.ts`): refreshes the Supabase session on every request so cookies stay current.
- **Admin check** (`/newsletter`): role `=== "admin"` OR email in `NEWSLETTER_ADMIN_EMAILS` env var (comma-separated).

### Route Structure

| Route | Access | Notes |
|---|---|---|
| `/` | Public | Landing page |
| `/pd` | Public | Wicked Strong PD program landing page |
| `/about-susan` | Public | Founder bio |
| `/login` | Public | Email/password login + sign-out server action |
| `/set-password` | Public | Supabase magic-link invite callback |
| `/schedule` | Members | Class schedule (regular members) |
| `/library` | Members | Workout library — merges hardcoded demo videos with `workouts` Supabase table |
| `/newsletter` | Members | Newsletter hub; admins see upload form |
| `/newsletter/newsletters/[slug]` | Members | Route handler that serves newsletter PDF files from `src/app/newsletter/newsletters/` |
| `/pd/schedule` | `pd_member` | PD class schedule; `ZOOM_LINK` constant in the file controls the Zoom button |
| `/pd/library` | `pd_member` | PD workout library |
| `/pd/newsletter` | `pd_member` | PD newsletter/resources |

### Supabase Data

The `workouts` table is queried in `/library`:

```
id, title, workout_type, recording_url, created_at, class_date
```

`workout_type` must match one of the `TYPES` tuple defined at the top of `src/app/library/page.tsx`. Demo/static workouts are hardcoded in `DEMO_WORKOUTS` and prepended to Supabase results.

### Design System

CSS custom properties defined in `src/app/globals.css` (dark-mode variants included):

| Token | Value | Usage |
|---|---|---|
| `--ws-navy` | `#1f478e` | Primary brand color, CTAs |
| `--ws-blue` | `#0487b5` | Accent |
| `--ws-sky` | `#80cbe0` | Light accent / decorative |
| `--ws-sand` | `#f6f3ee` | Card backgrounds (warm) |
| `--ws-pearl` | `#f7f8fb` | Card backgrounds (cool), page bg |
| `--ws-ink` | `#0b0f14` | Primary text |
| `--ws-muted` | `#5f6775` | Secondary text |

Always reference tokens as `text-[color:var(--ws-navy)]` (Tailwind v4 arbitrary-value syntax). Fonts: `font-sans` = Space Grotesk, `font-display` = Playfair Display.

### Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
NEWSLETTER_ADMIN_EMAILS   # comma-separated list for admin access
```

### Path Alias

`@/*` maps to `./src/*`.
