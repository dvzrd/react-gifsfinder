import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import EndpointReducer from './reducer_endpoint'
import GifsReducer from './reducer_gifs'
import TermsReducer from './reducer_terms'

const rootReducer = combineReducers({
  endpoint: EndpointReducer,
  gifsByEndpoint: GifsReducer,
  terms: TermsReducer,
  form: formReducer
})

export default rootReducer
