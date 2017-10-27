import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Gifs = ({gifs}) => (
  <Component>
    <List>
      {gifs.map((gif, index) =>
        <Item key={ index }>
          <img src={ gif.images.fixed_height_downsampled.url } />
        </Item>
      )}
    </List>
  </Component>
)

const Component = styled.section`
  max-width: 38em;
  margin: 0 auto;
  padding: 1em;

  @media only screen and (min-width: 48em) {
    max-width: 48em;
  }

  @media only screen and (min-width: 62em) {
    max-width: 58em;
  }
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  margin-left: -1em;
  padding: 0;
  list-style: none;
`

const Item = styled.li`
  flex: none;
  width: 100%;
  margin: 0;
  padding-left: 1em;
  padding-bottom: 0.65em;

  @media only screen and (min-width: 30em) {
    width: 50%;
  }

  @media only screen and (min-width: 48em) {
    width: 33.3333%;
  }
`

Gifs.propTypes = {
  gifs: PropTypes.array.isRequired
}

export default Gifs
