import { combineReducers } from 'redux'

import EndpointReducer from './reducer_endpoint'
import GifsReducer from './reducer_gifs'

const rootReducer = combineReducers({
  endpoint: EndpointReducer,
  gifsByEndpoint: GifsReducer
})

export default rootReducer
