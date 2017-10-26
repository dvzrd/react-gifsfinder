import { FETCH_SEARCHED_TERMS, FETCH_SEARCHED_TERM, RETAIN_SEARCHED_TERM } from '../actions'

const INITIAL_STATE = []

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_SEARCHED_TERMS:
      return [ ...state, ...action.payload ]
    case FETCH_SEARCHED_TERM:
     return { ...state, terms: [...state.terms, action.payload] }
    case RETAIN_SEARCHED_TERM:
      return { ...state, terms: [ ...state.terms, action.payload ] }
    default:
      return state
  }
}
