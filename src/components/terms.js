import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Terms = ({ terms, handleTermClick }) => (
  <Component>
    <List>
      {terms.map((term, index) =>
        <Item key={ index }>
          <Button onClick={ () => handleTermClick(term.endpoint) }>
            { term.label }
          </Button>
        </Item>
      )}
    </List>
  </Component>
)

const Component = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  max-width: 40em;
  margin: 0 auto;
  padding: 0.5em;
  z-index: 1;

  @media only screen and (min-width: 30em) {
    top: auto;
    bottom: 0;
  }

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

const List = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style: none;
`

const Item = styled.li`
  margin: 0;
`

const Button = styled.button`
  cursor: pointer;
  float: right;
  margin-bottom: 0.5em;
  padding: 0.5em 1em;
  outline: none;
  border: 0;
  box-shadow: 0 0 0.0 0.05em #1c130c;
  background-color: #cae86b;
  color: #1c130c;
  line-height: 1;
  text-transform: uppercase;
  transition: all 250ms;

  &:hover {
    background-color: #b7d362;
  }

  &:last-child {
    margin-bottom: 1em;
  }
`

Terms.propTypes = {
  terms: PropTypes.array.isRequired,
  handleTermClick: PropTypes.func.isRequired
}

export default Terms
