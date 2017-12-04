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
  wordifyTweet: createAction('add words to slide 4 redux implementation'),
  completeTweet: createAction('add enhancer to slide 4 redux implementation')
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
  },
  [actions.completeTweet.type] (state) {
    return {
      step: 3,
      tweet: `function createStore (reducer, enhancer) {
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
}`
    }
  }
})

export const notes =
`or something like this. it's Redux implemented in a tweet. Now this was back
when -- and you may be too young to remember this -- when tweets were only 140
characters.

so that was something. i thought "wow, redux is simple enough to fit in a
tweet." and i *left arrow*

====

but let's break this out and look at it in a little more detail

*click*

with words

*click*

Okay. so redux exports a function called \`createStore\`, and that function
takes a reducer.

it returns an object, that we call the store, which has three functions.

getState, which returns us the current state
dispatch, which lets us send an action through the store
and subscribe, which lets us register functions to be told when an action gets
dispatched.

so there's only a couple of concepts we need to look at here,

*click*
`

class Slide4 extends PureComponent {
  forward = () => {
    const {
      step,
      expandTweet,
      wordifyTweet,
      completeTweet,
      incrementSlide
    } = this.props

    switch (step) {
      case 0: return expandTweet()
      case 1: return wordifyTweet()
      case 2: return completeTweet()
      case 3: return incrementSlide()
    }
  }

  render () {
    const {
      tweet
    } = this.props

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
