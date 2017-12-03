import React from 'react'

import {Provider} from 'react-redux'

import {
  render
} from 'react-dom'

import store from './store'

import App from './app'

import './index.css'

function renderApp () {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

renderApp()

if (module.hot) {
  module.hot.accept('./app', renderApp)
}
