import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Terms = ({terms}) => (
  <Component>
    <List>
      {terms.map((term, index) =>
        <Item key={ index }>
          { term.endpoint }
        </Item>
      )}
    </List>
  </Component>
)

const Component = styled.section`
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

const List = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style: none;
`

const Item = styled.li`
  margin: 0;
`

Terms.propTypes = {
  terms: PropTypes.array.isRequired
}

export default Terms
