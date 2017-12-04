import React, {PureComponent} from 'react'

import Slide from './slide'

export const notes = ' '

export default class Slide15 extends PureComponent {
  componentDidMount () {
    window.hljs.highlightBlock(this.codeNode)
  }
  render () {
    return (
      <Slide
        {...this.props}
        background={this.props.active ? '#282c34' : '#9c333c'}>
        <pre
          style={{fontSize: '3vh', fontWeight: 100}}
          ref={node => { this.codeNode = node }}>
          {`function createStore (reducer, enhancer) {
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
}`}
        </pre>
      </Slide>
    )
  }
}
