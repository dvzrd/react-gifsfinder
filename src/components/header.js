import React from 'react'
import styled from 'styled-components'

const Header = () => (
  <Component>
    <Section>
      <Logo>
        GIFs Finder
      </Logo>
    </Section>
  </Component>
)

const Component = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  background-color: #1C140D;
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

const Logo = styled.h1`
  margin: 0;
  margin-top: 2em;
  color: #CBE86B;
  font-size: 2em;
`

export default Header
