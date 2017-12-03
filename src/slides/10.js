import React, {PureComponent} from 'react'

import Slide from './slide'
import Code from './code'

const example = `const INCREMENT_SLIDE = 'increment slide'
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

const store = createStore(reducer)

const slides = ['slide 1', 'slide 2', 'slide 3']

function render () {
  const current = store.getState()
  document.getElementById('slide').textContent = slides[current % slides.length]
}

store.subscribe(render)

window.onclick = () => store.dispatch(incrementSlide())
window.onkeypress = () => store.dispatch(decrementSlide())

render()`

export const notes =
`so here's a full example application using redux.

at the top, we define our action types as constants.

then we have a couple action creators for those action types.

then we have our reducer, which keeps track of the current slide. its default
state, you can see, is 0. increment adds one, decrement removes one unless that
would be below 0.

then we create our store with that reducer. our slide content is not very
exciting.

we've got a render function here, that gets the current state, which is the
current slide number, and sets the text content of the slide element to that
slide

then we subscribe to state changes, so that render gets called any time our
state changes

and we're binding a couple events, so that when you click the slide increments
and when you press a key, the slide decrements

then we call render once to get started

*open terminal, show html file, show store.js, python3 -m http.server,
*demonstrate*

okay, so that's redux.

*click*`

export default class Slide3 extends PureComponent {
  componentDidMount () {
    window.hljs.highlightBlock(this.codeNode)
  }

  render () {
    return (
      <Slide
        {...this.props}
        background='#aaa'>
        <Code style={{fontSize: 13}}>
          <div ref={node => { this.codeNode = node }}>
            {example}
          </div>
        </Code>
      </Slide>
    )
  }
}
