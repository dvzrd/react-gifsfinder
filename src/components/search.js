import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Search = ({ term, handleSearch, handleInputChange }) => (
  <Container>
    <Form onSubmit={ event => handleSearch(event, term) }>
      <Input type='text'
             placeholder='Find GIFs in a Jiffy...'
             value={ term }
             onChange={ event => handleInputChange(event.target.value) } />
      <Button type='submit'>
        Search
      </Button>
    </Form>
  </Container>
)

const Container = styled.section`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  border-top: 0.5em solid #b8d361;
  background-color: #CBE86B;

  @media only screen and (min-width: 30em) {
    position: relative;
  }
`

const Form = styled.form`
  display: flex;
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

const Input = styled.input`
  flex: 1;
  margin: 0 auto;
  padding: 0.75em 1em;
  outline: 0;
  border: 0.05em solid #464441;
  box-shadow: 0.05em 0.05em 0.25em 0 #8c8987 inset;
  font-size: 75%;

  @media only screen and (min-width: 30em) {
    font-size: 1em;
  }
`

const Button = styled.button`
  cursor: pointer;
  min-width: 8em;
  padding: 0.5em 1em;
  outline: 0;
  border: 0.05em solid #1C140D;
  background-color: #1C140D;
  color: #fff;
  font-size: 75%;
  text-transform: uppercase;
  transition: all 250ms;

  @media only screen and (min-width: 30em) {
    font-size: 1em;
  }

  &:hover {
    background-color: #464441;
  }
`

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
}

export default Search
