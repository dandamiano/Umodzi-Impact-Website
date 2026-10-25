/**
 * Client-supplied brand colours, measured from Branding Guideline.jpg
 * and the opaque pixels in logo/*.png. Replace these tokens here and in
 * app/globals.css. Do not introduce a second palette.
 *
 * Swatches, left to right: orange #F08804, teal #245468, navy #304070, green #386830.
 * The green logo file measures #38782C. Interface tokens follow the swatch.
 *
 * Contrast on white: navy 10.0:1, teal 8.3:1, green 6.6:1, orange 2.6:1.
 * Orange is below WCAG AA for text. Use it only as a non-text accent.
 * Mist is a derived surface, not a fifth brand colour.
 */
export const brandColors = {
  orange: "#F08804",
  teal: "#245468",
  navy: "#304070",
  green: "#386830",
  greenLogo: "#38782C",
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
