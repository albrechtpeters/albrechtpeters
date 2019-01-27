import styled, { themePx, themeGet } from 'util/style'

const Text = styled.p`
  color: ${themeGet(`colors.text`)};
  font-size: 0.9rem;

  &::selection {
    background: ${themeGet(`colors.grey.300`)};
  }

  @media screen and (min-width: ${themePx(`cardWidth`)}) {
    font-size: 1rem;
  }
`

export default Text
