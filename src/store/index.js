import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

import reducer from './reducer'

import notesMiddleware from './notes-middleware'

const store = createStore(reducer, compose(
  applyMiddleware(notesMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store

if (module.hot) {
  module.hot.accept('./reducer', () => store.replaceReducer(reducer))
}
