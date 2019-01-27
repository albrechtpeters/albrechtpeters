import styled, { themeGet } from 'util/style'
import strike from './strike.svg'

const StrikeThrough = styled.span`
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background: url(${strike}) no-repeat;
    position: absolute;
    top: 50%;
    margin-top: -10px;
  }

  &::selection {
    background: ${themeGet(`colors.grey.300`)};
  }
`

export default StrikeThrough
