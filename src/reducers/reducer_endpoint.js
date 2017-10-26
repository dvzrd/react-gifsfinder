import { SET_ENDPOINT } from '../actions'

const INITIAL_STATE = '/trending?'

const endpoint = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ENDPOINT:
      return action.endpoint
    default:
      return state
  }
}

export default endpoint
