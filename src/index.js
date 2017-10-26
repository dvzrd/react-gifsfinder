import React from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import App from './containers/app'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)

render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.querySelector('.root'))

injectGlobal`
  html {
    overflow-x: hidden;
    overflow-y: auto;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #f8f8ff;
    color: #1C1C1C;
    font-family: 'Kanit', 'Open Sans', Arial, sans-serif;
    font-weight: normal;
    line-height: 1.5;
  }

  h1, h2, h3,
  h4, h5, h6 {
    margin: 2em 0 1em;
    color: #050503;
    font-weight: bold;
    line-height: 1;
  }

  h1 small, h2 small, h3 small,
  h4 small, h5 small, h6 small {
    display: block;
    margin-top: 0.5em;
    font-size: 50%;
    font-weight: normal;
  }

  a {
    position: relative;
    color: #FC4000;
    transition: all 250ms;
  }

  a:hover {
    color: #E23C03;
  }

  img {
    width: 100%;
    margin: 0 auto;
  }

  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`
