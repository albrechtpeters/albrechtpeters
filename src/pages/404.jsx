import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Hero from 'components/Hero'
import Text from 'components/Text'
import ContactLink from 'components/ContactLink'

const NotFoundPage = () => (
  <Layout>
    <SEO />
    <Hero>Ouuups.</Hero>
    <Text>
      Hier ist nichts... (mehr?)
      <br /> Wir hoffen du suchst nichts wichtiges.
    </Text>
    <ContactLink to="/">Sag doch mal hallo!</ContactLink>
  </Layout>
)

export default NotFoundPage
