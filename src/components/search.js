import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Search = ({ onSearch, onInputChange }) => (
  <Container>
    <Form onSubmit={ event => onSearch(event) }>
      <Input type='text'
             placeholder='Find GIFs in a Jiffy...'
             onChange={ event => onInputChange(event.target.value) } />
      <Button type='submit'>
        Search
      </Button>
    </Form>
  </Container>
)

const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  border-top: 0.5em solid #b8d361;
  background-color: #CBE86B;
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
  font-size: 1em;
`

const Button = styled.button`
  cursor: pointer;
  min-width: 8em;
  padding: 0.5em 1em;
  outline: 0;
  border: 0.05em solid #1C140D;
  background-color: #1C140D;
  color: #fff;
  font-size: 1em;
  text-transform: uppercase;
  transition: all 250ms;

  &:hover {
    background-color: #464441;
  }
`

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired
}

export default Search
