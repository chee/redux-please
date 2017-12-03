import slides from '../slides'

import {
  incrementSlide,
  decrementSlide,
  setSlide
} from './actions'

const notes = slides.map(slide => slide.notes)

const relevantActions = [
  incrementSlide.type,
  decrementSlide.type,
  setSlide.type
]

export default store => {
  const socket = new window.WebSocket('ws://localhost:7775')

  socket.addEventListener('message', message => {
    if (message.data === 'back') {
      store.dispatch(decrementSlide())
    }
    if (message.data === 'forward') {
      store.dispatch(incrementSlide())
    }
  })

  return next => action => {
    next(action)
    const {
      currentSlide
    } = store.getState()

    const note = notes[currentSlide]

    if (note && relevantActions.includes(action.type)) {
      socket.send(note)
    }
  }
}
