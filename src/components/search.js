import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components'

// @TODO: use redux-form
// transform into container
const Search = ({ onSearch }) => (
  <Component>
    <Form onSubmit={e => onSearch()}>
      <Input placeholder='search' />
      <Button type='submit'>
        Search
      </Button>
    </Form>
  </Component>
)

const Component = styled.section`
  margin: 0 auto;
  padding: 1em;
  background-color: #fff;
`

const Form = styled.form`
  margin: 0 auto;
`

const Input = styled.input`
  width: 100%;
  margin: 0 auto;
  padding: 0.5em 0.75em;
  outline: 0;
  border: 0.05em solid #dcdcea;
  box-shadow: 0.05em 0.05em 0.25em 0 #dddde6 inset;
  font-size: 1em;
`

const Button = styled.button`
  background-color: #f12f2f;
`

export default Search
