import styled, { themePx } from 'util/style'
import { OutboundLink } from 'components/Link'

const ContactLink = styled(OutboundLink)`
  text-decoration: underline;
  color: blue;
  font-size: 0.9em;

  & + & {
    margin-left: ${themePx(`space.4`)};
  }

  @media screen and (min-width: ${themePx(`cardWidth`)}) {
    & + & {
      margin-left: 0;
    }
  }
`

export default ContactLink
