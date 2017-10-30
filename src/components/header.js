import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Header = ({ handleRefresh }) => (
  <Component>
    <Section>
      <Button onClick={ handleRefresh }>
        <Logo>
          GIFs Finder
        </Logo>
      </Button>
    </Section>
  </Component>
)

const Component = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  background-color: #1C140D;
  z-index: 1;
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
  color: #CBE86B;
  font-family: 'Fugaz One', 'Oxygen', Helvetica, Arial, sans-serif;
  font-size: 3em;

  @media only screen and (min-width: 48em) {
    margin-top: 1em;
  }

  @media only screen and (min-width: 62em) {
    margin-top: 2em;
    font-size: 4em;
  }
`

const Button = styled.button`
  cursor: pointer;
  outline: 0;
  border: 0;
  background-color: transparent;
`

Header.propTypes = {
  handleRefresh: PropTypes.func.isRequired
}

export default Header
