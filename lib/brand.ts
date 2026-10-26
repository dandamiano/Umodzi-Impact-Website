/**
 * Colour usage guide. Hex values are the written spec in color-usage-guide.html.
 * Replace these tokens here and in app/globals.css. Do not introduce a second palette.
 *
 * Royal blue 40% #314172 — primary. Navigation, headings, body text,
 * primary buttons and major sections.
 * Orange 25% #F18B05 — accent only. Highlights, rules, icons and
 * photographic offsets. Not for buttons or link text.
 * Green 20% #396831 — supporting. Values, sustainability and one feature section.
 * Teal 15% #26546B — secondary. Active navigation, focus, small labels,
 * card edges and secondary buttons.
 *
 * Header and footer stay on white so the teal logo remains clear.
 * Logo files: teal #26546B, orange #F18A05, green #39792F.
 * Interface green follows the swatch. The green logo file is brighter.
 *
 * Contrast on white: royal blue 9.9:1, teal 8.2:1, green 6.6:1, orange 2.5:1.
 * Mist is a derived surface, not a fifth brand colour.
 */
export const brandColors = {
  orange: "#F18B05",
  teal: "#26546B",
  navy: "#314172",
  green: "#396831",
  greenLogo: "#39792F",
  white: "#FFFFFF",
  mist: "#F4F7F8",
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
