import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Gifs = ({gifs}) => (
  <Component>
    <List>
      {gifs.map((gif, index) =>
        <Item key={ index }>
          <Link href={ gif.url } target='_blank'>
            <Gif gif={ gif.images.fixed_height.url } />
          </Link>
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
  padding-bottom: 1em;

  @media only screen and (min-width: 30em) {
    width: 50%;
  }

  @media only screen and (min-width: 48em) {
    width: 33.3333%;
  }

  @media only screen and (min-width: 75em) {
    width: 25%;
  }
`

const Link = styled.a`
  display: block;
  box-shadow: 0 0 0 0.1em #F2E9E1;
  background-color: #ddd5cc;
  text-decoration: none;
  transition: all 250ms;

  &:hover {
    box-shadow: 0 0 0.05em 0.15em #CBE86B;
    transform: scale(1.015);
  }
`

const Gif = styled.figure`
  width: 100%;
  height: 12em;
  margin: 0 auto;
  background-image: url(${props => props.gif});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  @media only screen and (min-width: 30em) {
    height: 14em;
  }

  @media only screen and (min-width: 48em) {
    height: 12em;
  }

  @media only screen and (min-width: 62em) {
    height: 14em;
  }
`

Gifs.propTypes = {
  gifs: PropTypes.array.isRequired
}

export default Gifs
