---
target: src/app/components/_modules/sections/shadcn-ui-section.tsx
total_score: 28
p0_count: 0
p1_count: 2
timestamp: 2026-07-25T12-17-26Z
slug: components-modules-sections-shadcn-ui-section-tsx
---
# Critique: src/app/components/_modules/sections/shadcn-ui-section.tsx

**Method: dual-agent (A: design review · B: detector scan)**
**Date:** 2026-07-25

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Tabs/tooltip feedback present; Button description claims a "loading state" that is never rendered. |
| 2 | Match System / Real World | 3 | Developer-appropriate language; only weakness is filler marketing copy. |
| 3 | User Control and Freedom | 3 | Radix tooltip/tabs dismiss correctly; no in-page jump links. |
| 4 | Consistency and Standards | 3 | Strong rhythm match to sibling section; `text-amber-500` is off-token. |
| 5 | Error Prevention | 3 | Read-only showcase. |
| 6 | Recognition Rather Than Recall | 3 | Sections labeled clearly; promised variants must be imagined. |
| 7 | Flexibility and Efficiency of Use | 2 | No anchor/TOC, no copy-code affordance, no prop table. |
| 8 | Aesthetic and Minimalist Design | 2 | "Landing page cards" block is decorative showcase padding. |
| 9 | Help Users Recognize, Diagnose, Recover from Errors | 3 | No error/invalid states shown. |
| 10 | Help and Documentation | 3 | Inline prose is helpful; no code snippets or prop tables. |
| **Total** | | **28 / 40** | **Good band** |

## Anti-Patterns Verdict

**Mixed.** The primitive demos (Button / Card / Tooltip / Select) read as honest inventory and stay clean of banned patterns. The "Landing page cards" block is textbook SaaS slop: identical icon + title + text feature grid, $0/$29 pricing template, fabricated testimonial, off-token amber rating. The substantive design issues all came from the LLM review; the CLI detector returned zero findings (exit 0) across the target and the five supporting UI primitives. Browser visualization unavailable in this session.

## What's Working

- Rhythm consistency with the sibling FioComponentSection — both tabs read as one coherent system.
- The primitive demos honor DESIGN.md's named rules — ring-only separation, pill buttons, focus-visible Radix tooltip, no gradient text, no eyebrows, no numbered markers.
- Peak-end is well-chosen — closing on the live ColorPicker puts the starter's most differentiating interaction last.

## Priority Issues

### [P1] Identical icon + heading + text feature grid violates the project's own anti-reference

**Why it matters:** Lines 94-138 render three structurally identical `bg-primary/10 rounded-2xl size-10` icon-chip + CardTitle + CardDescription cards in a `md:grid-cols-3` row — the precise pattern DESIGN.md and PRODUCT.md name and forbid.

**Fix:** Break the rhythm: vary card sizes/spans, drop the uniform icon-chip, or replace the fabricated feature trio with real prop-variation demos (Card with/without footer, with action, sm vs default).

**Suggested command:** `/impeccable layout`

### [P1] "Showcase, not inventory" — fabricated testimonial and pricing template contradict PRODUCT.md

**Why it matters:** PRODUCT.md mandates "Inventory, not showcase." The "Landing page cards" block is curated hero shots: a $0/$29 pricing template, a blog cover placeholder, an invented testimonial ("Northwind", "Aulia Rahman"). Fake shippable data in a starter is worse than filler — a forker will accidentally ship it.

**Fix:** Cut the marketing block, or reframe it explicitly as "composition examples" separated from the primitive inventory, and replace invented people/quotes with self-referential placeholder copy.

**Suggested command:** `/impeccable distill`

### [P2] Button demo under-delivers on its own description

**Why it matters:** Line 37 promises "multiple sizes, optional icon and loading state," but no `isLoading` button and no `disabled` state are shown. An inventory whose caption claims features it doesn't demonstrate breaks trust.

**Fix:** Add a row demonstrating `isLoading`, `disabled`, and a representative size spread (xs/sm/default/lg/icon).

**Suggested command:** `/impeccable document`

### [P2] Star rating and testimonial fail screen-reader users

**Why it matters:** The five `StarIcon`s carry no `aria-label`; rating conveyed entirely by shape and color. The quote is a `CardDescription` div, not `<blockquote>`/`<figure><figcaption>`. Muted-foreground text is borderline against 4.5:1 AA.

**Fix:** Give the star group `role="img" aria-label="Rated 5 out of 5"`, mark the quote up as `<figure><blockquote>…</blockquote><figcaption>…</figcaption></figure>`, verify muted-foreground clears 4.5:1.

**Suggested command:** `/impeccable audit`

### [P2] Off-token `text-amber-500` breaks the One-Accent / token discipline

**Why it matters:** Line 211 hardcodes `text-amber-500`, a hue absent from the palette. The picker can't re-tint it; contradicts the Dynamic-Accent Rule on the very page that demos the picker.

**Fix:** Route the rating through a semantic token, or use `text-primary`/`text-foreground`, so it participates in the live re-tint.

**Suggested command:** `/impeccable colorize`

## Persona Red Flags

### Alex (Power User)
- No anchor IDs on section headings — can't deep-link, must scroll the whole tab.
- No copy-code / usage-snippet affordance — can't grab the API.
- Button demo advertises a "loading state" but renders none.

### Sam (Accessibility)
- Star row is icon-only with no `aria-label`.
- Testimonial is `CardDescription`, not `<blockquote>`/`<figcaption>`.
- `CardTitle` renders as `<div className="font-heading">` — invisible to heading navigation.
- Section descriptors use `text-muted-foreground` (Slate Veil, oklch 0.552) — borderline 4.5:1 AA.

### Riley (Stress Tester)
- Caption promises loading/disabled states that aren't rendered.
- Fabricated data ("Northwind", "Aulia Rahman", "$29/month") will ship verbatim if not swapped.
- Card titles have no long-string or overflow demo.

## Minor Observations

- Pro card (line 170) layers `border-primary/40` on top of `ring-primary/20 ring-1` — minor Hairline-Ring violation.
- Blog "Cover image · 16:9" box (line 244) is a dead placeholder; `AppImageFallback` (the starter's signature component) would be the on-brand thing to demo here.
- "colour" (line 239) vs "color" elsewhere — mixed spelling within the same file.
- Select section caption (line 281) reads "drive the color picker above" but the picker isn't above it in this tab.
- `TooltipProvider` instantiated per-button rather than once at the section root — harmless but redundant.

## Questions to Consider

- If this page's job is "inventory, not showcase," what would it look like with the fabricated marketing block deleted and the space spent on prop edge cases?
- What if every demo shipped a copy-paste snippet beside it, so the page proved the starter by letting a dev leave with the code?
- Would a savvy forker trust Fio more if the "testimonial" openly said "Your quote here" instead of impersonating a real person?
- Should the composed "landing page" examples live on their own route rather than inside the primitive inventory?
