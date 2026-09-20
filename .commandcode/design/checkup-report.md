# Arialog — Design Checkup

- **Mode:** checkup
- **Date:** 2026-09-20
- **Score:** 30 / 60
- **Verdict:** Block

## Vital Signs

| # | Vital | Status | Score | Evidence |
|---|---|---|---|---|
| 1 | Intentionality | Healthy | 10 | Portfolio uses a distinct pink accent + serif-italic identity and Space Grotesk; blog is editorial serif; admin is a clean neutral product surface. Reads as chosen, not assembled from defaults. |
| 2 | Readability | Healthy | 10 | Body/heading sizes and dark mode are handled; low-contrast instances are limited to decorative micro-labels (see rejected). |
| 3 | Usability | Watch | 5 | Desktop flows complete; delete has no confirmation or undo. |
| 4 | Responsiveness | Critical | 0 | Admin nav is entirely hidden below 768px; admin inputs use `text-sm` (14px), triggering iOS Safari auto-zoom. |
| 5 | Speed | Watch | 5 | ISR (`revalidate = 3600`) + loading skeletons are in place; dev still round-trips Neon; not Lighthouse-verified. |
| 6 | Accessibility | Critical | 0 | Continuous decorative motion ignores `prefers-reduced-motion`; focus indication is a border-color shift only. |

## Findings

| # | Severity | Discipline | Location | Before | After | Why |
|---|---|---|---|---|---|---|
| 1 | HIGH | Accessibility | `src/components/PortfolioPage.tsx:23,121,139` | `animate-ping`, `animate-pulse`, `animate-bounce` run continuously; framer-motion entrances (`:58,:93,:107,:135`) run regardless of `prefers-reduced-motion` | Gate with `motion-reduce:animate-none` and wrap framer-motion in `MotionConfig reducedMotion="user"` | Decorative/vestibular motion ignores reduced-motion (escalation trigger) |
| 2 | HIGH | Responsiveness | `src/app/(admin)/layout.tsx:13` | Sidebar is wrapped in `hidden md:flex` with no mobile alternative | Add a mobile nav (drawer or top bar) | Below 768px there is no way to navigate the CMS |
| 3 | HIGH | Usability | `src/app/(admin)/dashbor/educations/page.tsx:38` (same in `experiences`, `showcases`) | "Hapus" submits `deleteEducation` immediately | Add confirmation, or soft-delete with undo, before `prisma.*.delete` | Irreversible delete with no confirmation or undo risks data loss |
| 4 | MEDIUM | Accessibility | `src/components/admin/fields.tsx:4`, `src/app/login/page.tsx:31` | `outline-none` + `focus:border-pink-500` | Use a 2–3px visible ring, e.g. `focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2` | Keyboard focus is a border-color shift only, too subtle to spot |
| 5 | MEDIUM | Responsiveness | `src/components/admin/fields.tsx:4`, `src/components/admin/FileUploadField.tsx` | `text-sm` (14px) on input/textarea/file inputs | Use `text-base` (16px) below 640px | Sub-16px inputs trigger iOS Safari auto-zoom on focus |

## Prescriptions (Critical)

- **Reduced motion** — add `motion-reduce:animate-none` to the three `animate-*` elements and wrap framer-motion usage in `MotionConfig reducedMotion="user"`.
- **Mobile admin nav** — add a mobile drawer or top navigation so Profile/Pendidikan/Pengalaman/Showcase remain reachable under 768px.
- **Delete** — add a confirmation step or implement soft-delete/undo before permanent `delete`.

## Considered but Rejected

| Location | Candidate | Rejected because |
|---|---|---|
| `src/components/PortfolioPage.tsx:139` | Raise contrast of `text-neutral-400` micro-labels | Decorative only; body and heading contrast is fine |
| Blog poster cards | Add a scrim behind overlaid text | White text already sits on a dark gradient, readable |
| `next.config.ts` remote images | Add more hostnames | Neon hostname already configured |

## Verification

- Read source: `fields.tsx`, `login/page.tsx`, `(admin)/layout.tsx`, `PortfolioPage.tsx`, and the three list pages.
- Typecheck and lint were green prior to this report; not re-run (no code changed in report mode).

**Not verified** (would require a running build + device/lab): live keyboard walkthrough, Lighthouse/Core Web Vitals, a real 320px render, colorblind simulation, and a screen-reader pass.

## Verdict

**Block** — three HIGH findings are standing: reduced-motion is ignored, the admin has no mobile navigation, and delete is irreversible with no confirmation or undo.
