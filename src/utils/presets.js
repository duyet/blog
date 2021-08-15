import {
  borders,
  breakpoints,
  colors,
  fontSizes as fontSizeTokens,
  fontWeights,
  letterSpacings,
  lineHeights,
  mediaQueries,
  radii,
  shadows,
  sizes as sizeTokens,
  space as spaceTokens,
  transition,
  zIndices
} from 'gatsby-design-tokens';

const fontSizes = fontSizeTokens.map((token) => `${token / 16}rem`);
const space = spaceTokens.map((token) => `${token / 16}rem`);

const sizes = {
  ...sizeTokens,
  mainContentWidth: {
    default: '54rem',
    withSidebar: '42rem'
  },
  tocWidth: '18rem'
};

export {
  borders,
  breakpoints,
  colors,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  mediaQueries,
  radii,
  shadows,
  sizes,
  space,
  transition,
  zIndices
};
