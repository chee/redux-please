import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

import Slide from '../slide'
import Code from '../code'

import createAction from '../../store/createAction'
import createReducer from '../../store/createReducer'

const initialState = {
  step: 0,
  tweet: 'let createStore=r=>{let s=r(undefined,{}),b=new Set;return{subscribe(f){b.add(f)},dispatch(a){s=r(s,a);b.forEach(f=>f())},getState:()=>s}}'
}

const actions = {
  expandTweet: createAction('expand slide 4 tweet'),
  wordifyTweet: createAction('add words to slide 4 redux implementation')
}

export const reducer = createReducer(initialState, {
  [actions.expandTweet.type] (state) {
    return {
      step: 1,
      tweet: `let createStore = r => {
  let s = r(undefined, {})
  let b = new Set
  return {
    subscribe (f) {
      b.add(f)
    },
    dispatch (a) {
      s = r(s, a)
      b.forEach(f => f())
    },
    getState: () => s
  }
}`
    }
  },
  [actions.wordifyTweet.type] (state) {
    return {
      step: 2,
      tweet: `let createStore = reducer => {
  let state = reducer(undefined, {type: '@init'})
  let subscriptions = new Set

  return {
    subscribe (fn) {
      subscriptions.add(fn)
    },
    dispatch (action) {
      state = reducer(state, action)
      subscriptions.forEach(fn => fn())
    },
    getState () {
      return {...state}
    }
  }
}`
    }
  }
})

class Slide4 extends PureComponent {
  forward = () => {
    const {
      step,
      expandTweet,
      wordifyTweet,
      incrementSlide
    } = this.props

    switch (step) {
      case 0: return expandTweet()
      case 1: return wordifyTweet()
      case 2: return incrementSlide()
    }
  }

  render () {
    const {
      tweet
    } = this.props

    console.log(this.props.step, this.props.tweet)

    return (
      <Slide
        {...this.props}
        forward={this.forward}
        background='#111'>
        <Code>
          {tweet}
        </Code>
      </Slide>
    )
  }
}

export default connect(state => state.slide4, actions)(Slide4)
