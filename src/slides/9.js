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
