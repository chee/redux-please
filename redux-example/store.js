function createStore (reducer, enhancer) {
  let subscriptions = new Set()
  let state

  if (enhancer) {
    return enhancer(createStore)(reducer)
  }

  const store = {
    subscribe (fn) {
      subscriptions.add(fn)
      return () => subscriptions.delete(fn)
    },
    dispatch (action) {
      state = reducer(state, action)
      subscriptions.forEach(fn => fn())
      return action
    },
    getState: () => state
  }

  store.dispatch({type: '@@redux/INIT'})

  return store
}

const INCREMENT_SLIDE = 'increment slide'
const DECREMENT_SLIDE = 'decrement slide'

function incrementSlide () {
  return {
    type: INCREMENT_SLIDE
  }
}

function decrementSlide () {
  return {
    type: DECREMENT_SLIDE
  }
}

function reducer (state = 0, action) {
  switch (action.type) {
    case INCREMENT_SLIDE: {
      return state + 1
    }
    case DECREMENT_SLIDE: {
      return Math.max(0, state - 1)
    }
    default: return state
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__())

const slides = ['first slide', 'another slide', 'slide three']

function render () {
  const current = store.getState()
  document.getElementById('slide').textContent = slides[current % slides.length]
}

store.subscribe(render)

window.onclick = () => store.dispatch(incrementSlide())
window.onkeypress = () => store.dispatch(decrementSlide())

render()
