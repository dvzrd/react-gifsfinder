import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import actions, {
  setEndpoint, invalidateEndpoint, retrieveGifs
} from '../actions'
import Header from '../components/header'
import Search from '../components/search'
import Gifs from '../components/gifs'
import Terms from '../components/terms'
import Footer from '../components/footer'

class App extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired,
    fetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    updated: PropTypes.number,
    gifs: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  componentDidMount() {
    const { dispatch, endpoint } = this.props
    dispatch(retrieveGifs(endpoint))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.endpoint !== this.props.endpoint) {
      const { dispatch, endpoint } = nextProps

      dispatch(retrieveGifs(endpoint))
    }
  }

  handleRefresh = newEndpoint => {
    const { dispatch, endpoint } = this.props
    const trending = '/trending?'

    dispatch(invalidateEndpoint(endpoint))
    dispatch(setEndpoint(trending))
  }

  handleSearch = (event, term) => {
    event.preventDefault()
    this.setState({ term: '' })

    const { dispatch } = this.props
    const query = term.split(' ').join('+')
    const endpoint = `/search?q=${query}`

    dispatch(setEndpoint(endpoint))
  }

  handleInputChange = value => {
    this.setState({ term: value })
  }

  handleTermClick = term => {
    const { dispatch, endpoint } = this.props
    
    dispatch(invalidateEndpoint(endpoint))
    dispatch(setEndpoint(term))
  }

  renderGifs() {
    const { endpoint, fetching, gifs } = this.props
    const empty = gifs.length === 0
    let headline = endpoint.substring(
      endpoint.lastIndexOf('/') + 1, 
      endpoint.lastIndexOf('?')
    ) 
    let list = null

    if (endpoint.includes('search')) {
      headline = endpoint.split('=').pop().split('+').join(' ')
    }

    // @TODO: Loading component
    empty ?
      ( fetching
        ? list = <Message>Loading</Message>
        : list = <Message>Gifs not found</Message>
      ) : list = <Gifs headline={headline} gifs={ gifs } />

    return list
  }

  renderTerms() {
    const { retrieved } = this.props
    const endpoints = Object.keys(retrieved)
    const searched = endpoints.length > 1
    let list = null

    if (searched) {
      const terms = endpoints.map(endpoint => {
        return Object.assign({}, { 
          endpoint: endpoint,
          label: endpoint.split('=').pop().split('+').join(' ')
        })
      }).slice(1).reverse()

      list = <Terms terms={ terms } handleTermClick={ this.handleTermClick } />
    }

    return list
  }

  render() {
    const { fetching, gifs } = this.props
    const empty = gifs.length === 0

    return (
      <Container>
        <Header handleRefresh={ this.handleRefresh } />
        <Main>
          <Search term={ this.state.term }
                  handleSearch={ this.handleSearch }
                  handleInputChange={ this.handleInputChange }/>
          { this.renderTerms() }
          { this.renderGifs() }
        </Main>
        <Footer />
      </Container>
    )
  }
}

const Container = styled.main`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
  width: 100%;
  margin: 0 auto;
  padding: 0;
`

const Message = styled.aside`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  text-align: center;
  z-indez: -1;
`

const mapStateToProps = state => {
  const { endpoint, gifsByEndpoint } = state
  const {
    fetching,
    updated,
    gifs
  } = gifsByEndpoint[endpoint] || {
    fetching: true,
    gifs: []
  }

  return {
    endpoint,
    gifs,
    fetching,
    updated,
    retrieved: gifsByEndpoint
  }
}

export default connect(mapStateToProps)(App)
