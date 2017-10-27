export const SET_ENDPOINT = 'SET_ENDPOINT'
export const INVALIDATE_ENDPOINT = 'INVALIDATE_ENDPOINT'
export const REQUEST_GIFS = 'REQUEST_GIFS'
export const RECEIVE_GIFS = 'RECEIVE_GIFS'
export const FETCH_SEARCHED_TERMS = 'FETCH_SEARCHED_TERMS'
export const FETCH_SEARCHED_TERM = 'FETCH_SEARCHED_TERM'
export const RETAIN_SEARCHED_TERM = 'RETAIN_SEARCHED_TERM'

const API_KEY = '&api_key=fZ49TIFdZ3xlMiR4He5XUalG33EubAdx'
const ROOT_URL = 'http://api.giphy.com/v1/gifs'
const ITEMS_LIMIT = '&limit=30'

export const setEndpoint = endpoint => ({
  type: SET_ENDPOINT,
  endpoint
})

export const invalidateEndpoint = endpoint => ({
  type: INVALIDATE_ENDPOINT,
  endpoint
})

export const requestGifs = endpoint => ({
  type: REQUEST_GIFS,
  endpoint
})

export const receiveGifs = (endpoint, json) => ({
  type: RECEIVE_GIFS,
  endpoint,
  gifs: json.data,
  received: Date.now()
})

const fetchGifs = endpoint => dispatch => {
  dispatch(requestGifs(endpoint))
  const url = `${ROOT_URL}${endpoint}${API_KEY}${ITEMS_LIMIT}`

  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receiveGifs(endpoint, json)))
}

const mustRetrieveGifs = (state, endpoint) => {
  const gifs = state.gifsByEndpoint[endpoint]

  if (!gifs) {
    return true
  }

  if (gifs.fetching) {
    return false
  }

  return gifs.invalidate
}

export const retrieveGifs = endpoint => (dispatch, getState) => {
  if (mustRetrieveGifs(getState(), endpoint)) {
    return dispatch(fetchGifs(endpoint))
  }
}

export function fetchSearchedTerms(terms) {
  return {
    type: FETCH_SEARCHED_TERMS,
    payload: terms
  }
}

export function fetchSearchedTerm(term) {
  return {
    type: FETCH_SEARCHED_TERM,
    payload: terms
  }
}

export function retainSearchedTerm(term) {
  return {
    type: RETAIN_SEARCHED_TERM,
    payload: term
  }
}
