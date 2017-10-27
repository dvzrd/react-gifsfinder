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

  handleSearch = event => {
    event.preventDefault()

    const { dispatch } = this.props
    const query = this.state.term.split(' ').join('+')
    const endpoint = `/search?q=${query}`

    // dispatch(retainSearchedTerm(query))
    dispatch(setEndpoint(endpoint))
  }

  handleInputChange = value => {
    this.setState({ term: value })
  }

  handleTermClick = event => {
    event.preventDefault()

    const { dispatch, endpoint } = this.props

    dispatch(invalidateEndpoint(endpoint))
    dispatch(retrieveGifs(endpoint))
  }

  renderGifs() {
    const { fetching, gifs } = this.props
    const empty = gifs.length === 0
    let list = null

    empty ?
      ( fetching
        ? list = <Loading>Fetching Gifs</Loading>
        : list = <Empty>No Gifs Found</Empty>
      ) : list = <Gifs gifs={ gifs } />

    return list
  }

  renderTerms() {
    const { terms } = this.props
    const empty = terms.length === 0
    let list = null

    if (!empty) {
      list = <Terms terms={ terms } />
    }

    return list
  }

  render() {
    const { fetching, gifs } = this.props
    const empty = gifs.length === 0

    return (
      <Container>
        <Header />
        <Main>
          <Search onSearch={ this.handleSearch }
                  onInputChange={ this.handleInputChange }/>
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

const Loading = styled.aside`
  font-size: 2em;
  text-align: center;
`

const Empty = styled.aside`
  font-size: 2em;
  text-align: center;
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
    updated
  }
}

export default connect(mapStateToProps)(App)
