import {
  combineReducers
} from 'redux'

import createReducer from './createReducer'

import {
  setSlide,
  incrementSlide,
  decrementSlide
} from './actions'

import slides from '../slides'

const currentSlide = createReducer(0, {
  [setSlide.type]: (state, payload) => payload,
  [incrementSlide.type]: state => state + 1,
  [decrementSlide.type]: state => Math.max(0, state - 1)
})

const slideReducers = slides.reduce((slideReducers, slide, index) => {
  const {
    reducer
  } = slide

  reducer && (slideReducers[`slide${index}`] = reducer)

  return slideReducers
}, {})

export default combineReducers({
  currentSlide,
  ...slideReducers
})
