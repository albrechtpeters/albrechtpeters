import styled, { themePx, themeGet } from 'util/style'
import { Container } from 'components/Grid'

const Center = styled(Container)`
  max-width: ${themePx(`cardWidth`)};
  width: 100%;
  margin: 0;
  background: ${themeGet(`colors.offWhite`)};

  @media screen and (min-width: ${themePx(`cardWidth`)}) {
    box-shadow: 0 20px 83px 0 rgba(106, 15, 12, 0.35);
    border-radius: 10px;
  }
`

export default Center
