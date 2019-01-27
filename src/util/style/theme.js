/**
 * This is our custom theme where we define global styles.
 * It should serve as a guideline for styling, but not all styles *have* to be taken from here.
 */
const breakpoints = ['700px']

/**
 * Primary: Colors to use for actionable items, such as links, buttons etc.
 * Grey: Colors for items that are not that important
 */
const colors = {
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 0%)',
  pageBackground: 'hsl(2, 69%, 53%)',
  offWhite: 'hsl(12, 100%, 98%)',
  brand: 'hsl(2, 69%, 53%)',
  text: 'hsl(213, 11%, 35%)',
  grey: {
    100: 'hsl(210, 17%, 98%)',
    200: 'hsl(207, 22%, 90%)',
    300: 'hsl(210, 24%, 87%)',
    400: 'hsl(208, 17%, 83%)',
    500: 'hsl(209, 24%, 74%)',
    600: 'hsl(215, 17%, 63%)',
    700: 'hsl(214, 11%, 49%)',
    800: 'hsl(215, 17%, 30%)',
    900: 'hsl(215, 23%, 16%)',
  },
}

/**
 * Space is used for margin and padding scales.
 * It's recommended to use powers of two to ensure alignment across the entire project
 */
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]
const cardWidth = `700px`

/**
 * Typographic scale
 */
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96, 128]

const lineHeights = [1, 1.125, 1.25, 1.5]

const fontWeights = {
  normal: 400,
  semibold: 600,
}

/**
 * Letter-spacing should vary, depending on usage of text
 */
const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
  labels: '0.05em',
}

/**
 * Border-radius
 */
const radii = [0, 2, 4, 8, 16]

export const theme = {
  name: 'Default',
  breakpoints,
  colors,
  space,
  cardWidth,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
}
