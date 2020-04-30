import {
  borders,
  breakpoints,
  colors,
  fonts,
  fontSizes as fontSizeTokens,
  fontWeights,
  letterSpacings,
  lineHeights,
  mediaQueries,
  radii,
  shadows,
  space as spaceTokens,
  transition,
} from 'gatsby-design-tokens';


const fontSizes = fontSizeTokens.map((token) => `${token / 16}rem`);
const space = spaceTokens.map((token) => `${token / 16}rem`);

export {
  borders,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  mediaQueries,
  radii,
  shadows,
  space,
  transition,
};