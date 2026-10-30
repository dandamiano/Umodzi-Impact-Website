/**
 * Colour usage — energetic / youthful team-building tone.
 * Hex values stay brand-true (color-usage-guide.html). We change *roles and
 * volume*, not the palette. Do not invent a fifth brand swatch.
 *
 * Goal: visitors should feel out-of-office energy, not a corporate brochure.
 * Navy still anchors type; orange, green, and teal carry more play.
 *
 * Royal blue #314172 (~30–35%) — structure and readability.
 *   Headings, body text, primary buttons, occasional deep bands.
 *   Prefer smaller navy moments over large “serious” slabs.
 *
 * Orange #F18B05 (~28–32%) — energy and humour.
 *   Ribbons, stamps, tape, squiggles, sticky accents, photo offsets,
 *   celebration moments. Still weak contrast on white (~2.5:1): not for
 *   long body text or primary button labels on white.
 *
 * Green #396831 (~18–22%) — outdoor / alive.
 *   Playful section washes, nature cues, values, “field” moments — not
 *   limited to one sustainability block.
 *
 * Teal #26546B (~15–18%) — secondary motion.
 *   Active nav, focus rings, labels, secondary buttons, cool accents.
 *
 * Surfaces (derived, not brand swatches):
 *   Paper #FFFFFF — header/footer and calm reading.
 *   Mist #F4F7F8 — cool quiet bands.
 *   Wash orange / green / teal — soft scrapbook fills from brand hues.
 *
 * Logo files: teal #26546B, orange #F18A05, green #39792F.
 * Interface green follows the swatch; the green logo file is brighter.
 */
export const brandColors = {
  orange: "#F18B05",
  teal: "#26546B",
  navy: "#314172",
  green: "#396831",
  greenLogo: "#39792F",
  white: "#FFFFFF",
  mist: "#F4F7F8",
  washOrange: "#FFF4E6",
  washGreen: "#EEF5EA",
  washTeal: "#E8F1F3",
} as const;

/**
 * The guideline names Montserrat, Arial, and EB Garamond without assigning roles.
 * These roles are the working assignment for the layout.
 *
 * Montserrat and EB Garamond load through next/font.
 * Arial is a system font. The files in fonts/ are not published.
 */
export const brandFonts = {
  display: "Montserrat",
  body: "Arial",
  serif: "EB Garamond",
} as const;
