import {
  borders,
  breakpoints,
  colors,
  fonts as fontTokens,
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
  zIndices,
} from 'gatsby-design-tokens';

const fonts = {};
for (const fontFamily in fontTokens) {
  fonts[fontFamily] = fontTokens[fontFamily].join(', ');
}

const fontSizes = fontSizeTokens.map((token) => `${token / 16}rem`);
const space = spaceTokens.map((token) => `${token / 16}rem`);

const sizes = {
  ...sizeTokens,
  mainContentWidth: {
    default: '54rem',
    withSidebar: '42rem',
  },
  tocWidth: '18rem',
};

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
  sizes,
  space,
  transition,
  zIndices,
};