import facepaint from 'facepaint'

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: 1400,
}

export const mq = facepaint([
  `@media(min-width: ${breakpoints.sm}px)`,
  `@media(min-width: ${breakpoints.md}px)`,
  `@media(min-width: ${breakpoints.lg}px)`,
  `@media(min-width: ${breakpoints.xl}px)`,
  `@media(min-width: ${breakpoints.xxl}px)`,
])
