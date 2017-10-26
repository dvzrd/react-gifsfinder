import { INVALIDATE_ENDPOINT, REQUEST_GIFS, RECEIVE_GIFS } from '../actions'

const INITIAL_STATE = {
  fetching: false,
  invalidate: false,
  gifs: []
}

const gifs = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INVALIDATE_ENDPOINT:
      return {
        ...state,
        invalidate: true
      }
    case REQUEST_GIFS:
      return {
        ...state,
        fetching: true,
        invalidate: false
      }
    case RECEIVE_GIFS:
      return {
        ...state,
        fetching: false,
        invalidate: false,
        gifs: action.gifs,
        updated: action.received
      }
    default:
      return state
  }
}

const gifsByEndpoint = (state = { }, action) => {
  switch (action.type) {
    case INVALIDATE_ENDPOINT:
    case RECEIVE_GIFS:
    case REQUEST_GIFS:
      return {
        ...state,
        [action.endpoint]: gifs(state[action.endpoint], action)
      }
    default:
      return state
  }
}

export default gifsByEndpoint
