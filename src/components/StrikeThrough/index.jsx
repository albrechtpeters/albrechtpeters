import styled, { themeGet } from 'util/style'
import strike from './strike.svg'

const StrikeThrough = styled.span`
  position: relative;

  &::before {
    content: '';
    width: 110%;
    height: 100%;
    background: url(${strike});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 50%;
    left: -5%;
    margin-top: -10px;
  }

  &::selection {
    background: ${themeGet(`colors.grey.300`)};
  }
`

export default StrikeThrough
