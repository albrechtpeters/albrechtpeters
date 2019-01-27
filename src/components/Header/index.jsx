import React from 'react'

import { Link } from 'components/Link'
import { Container } from 'components/Grid'

import Wrapper from './Wrapper'
import Title from './Title'

const Header = () => (
  <Wrapper as="header">
    <Container maxWidth="700px">
      <Title>
        <Link to="/">albrechtpeters</Link>
      </Title>
    </Container>
  </Wrapper>
)

export default Header
