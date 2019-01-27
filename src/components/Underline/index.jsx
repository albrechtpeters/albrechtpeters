import styled, { themeGet } from 'util/style'
import underline from './underline.svg'

const Underline = styled.span`
  position: relative;

  &::before {
    content: '';
    width: 95%;
    height: 100%;
    background: url(${underline});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 93%;
    left: 3%;
    margin-top: -10px;
  }

  &::selection {
    background: ${themeGet(`colors.grey.300`)};
  }
`

export default Underline
