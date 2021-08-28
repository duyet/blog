import {
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
  sizes as sizeTokens,
  space,
  transition,
  zIndices
} from 'gatsby-design-tokens';

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
