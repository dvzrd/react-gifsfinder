import { combineReducers } from 'redux'

import EndpointReducer from './reducer_endpoint'
import GifsReducer from './reducer_gifs'
import TermsReducer from './reducer_terms'

const rootReducer = combineReducers({
  endpoint: EndpointReducer,
  gifsByEndpoint: GifsReducer,
  terms: TermsReducer
})

export default rootReducer
