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

render()
`

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
