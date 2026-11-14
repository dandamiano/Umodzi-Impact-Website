/**
 * Colour usage — energetic / youthful / funny team-building tone.
 * Hex values stay brand-true (color-usage-guide.html). We change *roles and
 * volume*, not the palette. Do not invent a fifth brand swatch.
 *
 * Colour theory for this site:
 *   Orange sits opposite cool blue-teal on the wheel. Pushing orange volume
 *   and pairing it with teal rests creates high-energy complementary contrast
 *   (playful, youthful) instead of analogous navy+teal (corporate, serious).
 *   Warm washes dominate reading surfaces; cool teal is a deliberate pause,
 *   not the default mood. Navy is ink, not atmosphere.
 *
 * Orange #F18B05 (~28–34%) — emotional accent / humour / action.
 *   Full orange fields only on home hero + celebration CTAs. Elsewhere:
 *   warm wash grounds with orange stamps, tape, scribbles, and buttons.
 *   Pair navy type on orange fills. Never long body text on white (~2.5:1).
 *
 * Green #396831 (~20–24%) — outdoor / alive.
 *   Field washes, nature cues, values, “out of the office” moments.
 *
 * Teal #26546B (~16–18%) — cool complementary rest.
 *   Active nav, focus rings, quiet section pauses after orange heat.
 *   Keeps orange feeling brighter by contrast — do not grow into large slabs.
 *
 * Royal blue #314172 (~18–22%) — structure and readability only.
 *   Headings, body text, punch words on orange fields. Prefer zero large
 *   navy background bands; they read as “serious brochure.”
 *
 * Surfaces (derived, not brand swatches):
 *   Paper #FFFFFF — header/footer and calm reading.
 *   Mist — warm peach-tinted quiet band (not cool corporate grey).
 *   Wash orange / green / teal — scrapbook fills; orange wash leads the rhythm.
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
  mist: "#FFF7EF",
  washOrange: "#FFE8CC",
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
