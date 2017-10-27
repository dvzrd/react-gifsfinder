import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <Component>
    <Section>
      <Copyright>
        Copyright © 2017. Damir Vazgird
      </Copyright>
    </Section>
  </Component>
)

const Component = styled.footer`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  border-bottom: 0.5em solid #ddd5cc;
  background-color: #F2E9E1;
`

const Section = styled.section`
  max-width: 40em;
  margin: 0 auto;
  padding: 1em;

  @media only screen and (min-width: 48em) {
    max-width: 50em;
  }

  @media only screen and (min-width: 62em) {
    max-width: 60em;
  }

  @media only screen and (min-width: 75em) {
    max-width: 70em;
  }
`

const Copyright = styled.p`
  margin: 0;
  margin-top: 2em;
  color: #464441;
  font-size: 75%;
`

export default Footer
