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
  margin: 0 auto;
  padding: 1em;
  background-color: #dedede;
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
