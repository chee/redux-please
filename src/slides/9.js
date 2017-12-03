import React, {PureComponent} from 'react'
import styled from 'styled-components'

import Slide from './slide'
import Code from './code'

const List = styled.ul`
  font-size: .5em;
  margin: 0;
`

const reducer = `function sausages (state = [], action) {
  switch (action.type) {
    case "add sausage": {
      return [
        ...state,
        action.sausage
      ]
    }
    case "remove sausage": {
      return state.filter(sausage =>
        sausage.id !== action.id
      )
    }
    default: return state
  }
}`

export const notes =
`reducers.

reducers are pure functions that take two arguments. the current state, and an
action.
store.dispatch will take care of calling the reducer with the state and your
action, and setting the state to the result of that operation.

the only rule for a reducer is that it must return something (that is, not
undefined). you'll want to return the current state if you aren't handling that
action, so that actions you don't care about don't affect your state.

so in this case we have a sausage reducer, that keeps a list of sausages.
when the action type is "add sausage", it appends the sausage to the list.
when the action type is "remove sausage", it removes the sausage from the list.

*click*`

export default class Slide3 extends PureComponent {
  render () {
    return (
      <Slide
        {...this.props}
        background='#3ea'>
        <h1>reducers</h1>
        <List>
          <p>pure function</p>
          <Code>
            {reducer}
          </Code>
        </List>
      </Slide>
    )
  }
}
