import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, theme } from 'util/style'
import GlobalStyles from 'util/style/GlobalStyles'

import Header from 'components/Header'

// eslint-disable-next-line no-unused-vars
import Aleo from 'typeface-aleo'
// eslint-disable-next-line no-unused-vars
import SourceSansPro from 'typeface-source-sans-pro'

import Center from './Center'
import Container from './Container'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Center>
      <GlobalStyles />
      <Container maxWidth="700px" px={[4, 5]} py={4}>
        <Header />
        {children}
      </Container>
    </Center>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
