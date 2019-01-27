import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import StrikeThrough from 'components/StrikeThrough'
import Hero from 'components/Hero'
import Text from 'components/Text'
import { Flex } from 'components/Grid'
import Name from 'components/Name'
import ContactLink from 'components/ContactLink'

const IndexPage = () => (
  <Layout>
    <SEO />
    <Hero>
      Wir <StrikeThrough>sind</StrikeThrough> waren eine Webagentur mit viel
      Liebe zu digitalem Handwerk und einzigartigen Webseiten.
    </Hero>
    <Text>
      Von 2013 bis 2018 haben wir für unsere wunderbare Kunden eine Vielzahl
      verschiedener, digitaler Projekte realisiert. Mittlerweile haben wir uns
      neuen Herausforderungen zugewandt, weshalb wir unter diesem Namen nicht
      länger tätig sind. Ihr erreicht uns nun wie folgt:
    </Text>
    <Flex flexDirection={[`column`, `row`]}>
      <Flex flexDirection="column" width={[`100%`, `50%`]} mb={[4, 0]}>
        <Name>Gregor</Name>
        <Flex flexDirection={[`row`, `column`]} width={[`100%`, `50%`]}>
          <ContactLink to="mailto:hello@gregoralbrecht.com">E-Mail</ContactLink>
          <ContactLink to="//www.linkedin.com/in/gregoralbrecht/">
            LinkedIn
          </ContactLink>
          <ContactLink to="//twitter.com/gregoralbrecht">Twitter</ContactLink>
        </Flex>
      </Flex>
      <Flex flexDirection="column" width={[`100%`, `50%`]}>
        <Name>Felix</Name>
        <Flex flexDirection={[`row`, `column`]} width={[`100%`, `50%`]}>
          <ContactLink to="mailto:felix.peters1@gmail.com">E-Mail</ContactLink>
          <ContactLink to="//www.linkedin.com/in/petersfelix/">
            LinkedIn
          </ContactLink>
          <ContactLink to="//twitter.com/_fpeters">Twitter</ContactLink>
        </Flex>
      </Flex>
    </Flex>
  </Layout>
)

export default IndexPage
