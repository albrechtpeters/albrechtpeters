import styled, { themePx } from 'util/style'

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 320px;

  @media screen and (min-width: ${themePx(`cardWidth`)}) {
    padding-top: ${themePx(`space.5`)};
    padding-bottom: ${themePx(`space.5`)};
  }
`

export default Center
