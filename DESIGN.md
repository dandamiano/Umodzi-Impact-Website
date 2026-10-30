# Umodzi Impact — Design Guide

**Direction:** Creative, a bit crazy, funny, and youthful — like team building itself. Visitors should feel out-of-office energy, not a corporate brochure.

Same brand assets (logo, hex colours, fonts). We change **voice, colour roles, layout energy, and interaction** — not invent a new brand.

---

## 1. Brand personality

| We are | We are not |
|--------|------------|
| Playful facilitators | A stiff consulting firm |
| Warm, energetic, human | Formal, brochure-heavy |
| Outdoor, Malawi, real teams | Stock-photo corporate |
| Clear *and* fun | Confusing jokes that hide the CTA |

**Voice test:** If the first screen could belong to any generic NGO after removing the logo, the branding is too weak. If it could belong to a bank, it’s too corporate.

**Copy tone:** Short, punchy, human. Sticky captions and stamps welcome. Never bury the next step in a joke.

---

## 2. Visual concept

**Primary metaphor: scrapbook / field zine**  
Polaroids, tape, stamps, squiggles, torn edges, soft colour washes, slight tilts.

**Secondary energy:** geometric confetti (dots, squares, rings) — **no emoji**.

**One composition per first viewport:** brand signal + one headline + one short line + one CTA group + one dominant visual. No hero card stacks, no floating promo badges on photos.

---

## 3. Colour usage

**Hex values stay fixed.** Roles and volume change for energy.  
Source of truth: `lib/brand.ts` + `color-usage-guide.html`.

| Colour | Hex | Share (feel) | Use for |
|--------|-----|--------------|---------|
| Royal blue (navy) | `#314172` | ~32% | Type, structure, primary buttons — fewer big “serious” slabs |
| Orange | `#F18B05` | ~30% | Energy: ribbons, stamps, tape, squiggles, celebration |
| Green | `#396831` | ~20% | Outdoor / alive: field washes, nature cues, values |
| Teal | `#26546B` | ~18% | Secondary motion: active nav, focus, labels |

**Surfaces (derived, not brand swatches):**

- Paper `#FFFFFF` — header, footer, calm reading  
- Mist `#F4F7F8` — cool quiet bands  
- Wash orange / green / teal — scrapbook fills (`wash-orange`, `wash-green`, `wash-teal`)

**Rules:**

- Orange is weak on white (~2.5:1) → accents only, not long body text  
- Header/footer stay white so the teal logo stays clear  
- Prefer alternating washes (orange / teal / green / mist) over repeated full-bleed navy  
- Do not invent a fifth brand colour or default to purple gradients / cream-serif-terracotta clichés  

---

## 4. Typography

| Role | Font | Use |
|------|------|-----|
| Display | Montserrat | Titles, stamps, UI labels |
| Serif | EB Garamond | Punchlines, witty ledes |
| Body | Arial | Supporting paragraphs |

**Type moves that feel youthful:**

- Split headlines (“Proof we” + tilted “had fun.”)  
- Hand-drawn orange squiggle underlines (SVG)  
- Stamp labels in small tracked caps  
- Short paragraphs; scannable chunks (HCI: impatient, visual-first readers)  

---

## 5. Layout & components

**Do**

- Full-bleed photo energy; overlapping polaroids; torn section edges  
- Sticky captions, tape bars, light tilts (±1–3°)  
- Section stamps (“Field notes”, “Top picks”, “Keep flipping”)  
- One job per section: one headline + short support  

**Don’t**

- Default to card grids for storytelling  
- Cards in the hero  
- Detached badges / chips floating on hero media  
- Dense newspaper columns or corporate “stat strip” clutter  

**Gallery pattern (reference):** scrapbook hero → max 2-row spotlight → paginated wall → playful CTA.

---

## 6. Motion

Ship **2–3 intentional motions** per major surface, not constant noise.

- Rise / settle on enter  
- Scribble draw on underlines  
- Hover: straighten tilt + slight scale  

Always respect `prefers-reduced-motion`.

---

## 7. Imagery

- Real Umodzi photos: circles, outdoors, play, facilitation  
- Captions can be witty; **alt text stays descriptive**  
- Photos are the visual anchor — not abstract gradients alone  

---

## 8. Interaction (HCI)

Play raises emotion **without blocking tasks**.

| Pattern | How we use it |
|---------|----------------|
| Clear goals + feedback | Enquiry steps, page stamps, success states |
| Do, don’t only read | Short vibe quiz → packages; interactive picks |
| Micro-delight | Hover wiggles, tape, confetti on success |
| Consistent humour | Same voice on errors, 404, empty states |
| Optional easter eggs | Logo wink, funny footer — never required for the task |

**Avoid:** pointless animation, jokes that need a reread, playfulness only on Gallery while other pages stay stiff.

---

## 9. Page rollout priority

1. **Tone system** — headlines, CTAs, errors site-wide  
2. **Home** — match Gallery scrapbook energy + colour washes  
3. **Services / Packages / Experiences** — same voice and colour roles  
4. **Interactive “team vibe → package”** moment  
5. **Enquiry delight** — progress + fun confirmation  

---

## 10. Quality checks

Before shipping a page, ask:

1. Does the first viewport feel like **Umodzi + fun**, not any corporate site?  
2. Are brand colours used with the **energetic roles** above?  
3. Is there a clear next step that humour doesn’t hide?  
4. Does it work on mobile without chaos (reduce tilt; keep stamps)?  
5. Does reduced-motion still make sense?  

---

## File map

| File | Role |
|------|------|
| `DESIGN.md` | This guide |
| `lib/brand.ts` | Colour + font tokens / usage notes |
| `color-usage-guide.html` | Share visual for colour volume |
| `app/globals.css` | CSS tokens including washes |
| `Branding Guideline.jpg` | Original brand reference (logo, swatches) |
