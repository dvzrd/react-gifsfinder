import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import actions, { setEndpoint, retainSearchedTerm } from '../actions'

class Search extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    console.log(this.props)
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  onSubmit = terms => {
    const { dispatch, setEndpoint, retainSearchedTerm } = this.props
    const query = terms.search.split(' ').join('+')
    const endpoint = `search?q=${query}`

    console.log(this.props)
    console.log(endpoint)

    // dispatch(retainSearchedTerm(query))
    // dispatch(setEndpoint(endpoint))
  }

  renderInput(field) {
    return <Input type='text' placeholder='Find GIFs in a Jiffy...' {...field.input} />
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <Container>
        <Form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <Field name='search' component={this.renderInput} />
          <Button type='submit'>
            Search
          </Button>
        </Form>
      </Container>
    )
  }
}

const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  border-top: 0.5em solid #b8d361;
  background-color: #CBE86B;
`

const Form = styled.form`
  display: flex;
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

export default reduxForm({
  form: 'SearchForm'
})(connect(null, actions)(Search))
