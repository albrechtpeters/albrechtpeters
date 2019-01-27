import styled, { themePx, themeGet } from 'util/style'

const Title = styled.h1`
  color: ${themeGet(`colors.brand`)};
  margin: 0;
  margin-top: ${themePx(`space.4`)};
  font-size: ${themePx(`fontSizes.5`)};

  & * {
    color: inherit;
    text-decoration: none;
  }

  &::selection,
  & *::selection {
    background: ${themeGet(`colors.brand`)};
    color: ${themeGet(`colors.offWhite`)};
  }
`

export default Title
