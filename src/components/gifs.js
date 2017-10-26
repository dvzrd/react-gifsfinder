import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Gifs = ({gifs}) => (
  <Component>
    <List>
      {gifs.map((gif, index) =>
        <Item key={ index }>
          { gif.url }
        </Item>
      )}
    </List>
  </Component>
)

const Component = styled.section`
  margin: 0 auto;
  padding: 1em;
  background-color: #eee;
`

const List = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style: none;
`

const Item = styled.li`
  margin: 0;
`

Gifs.propTypes = {
  gifs: PropTypes.array.isRequired
}

export default Gifs
