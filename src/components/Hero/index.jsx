import styled, { themePx, themeGet } from 'util/style'

const Hero = styled.p`
  font-weight: 800;
  line-height: 1.26;
  font-size: 40px;
  color: ${themeGet(`colors.grey.800`)};

  &::selection {
    background: ${themeGet(`colors.grey.300`)};
  }

  @media screen and (min-width: ${themePx(`cardWidth`)}) {
    font-size: 55px;
  }
`

export default Hero
