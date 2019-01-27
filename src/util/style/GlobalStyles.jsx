import { createGlobalStyle, themePx, themeGet } from './index'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100vh;
    min-width: 320px;
    width: 100%;
    padding: 0;
    margin: 0;
    background: ${themeGet('colors.offWhite')};

    @media screen and (min-width: ${themePx('cardWidth')}) {
      background: ${themeGet('colors.brand')};
    }
  }
`

export default GlobalStyles
