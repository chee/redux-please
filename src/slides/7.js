import React, {PureComponent} from 'react'
import styled from 'styled-components'

import Slide from './slide'
import Code from './code'

const List = styled.ul`
  font-size: .5em;
  margin: 0;
`

const action = `{
  type: "remove sausage",
  id: 22
}`

export const notes =
`okay, actions are a simple object that describes something happening in your
application. in this case, the action is "remove sausage", and the sausage's id
is 22.

the only rule is that an action must have a type, and that type must be a
string.

you're not going to be dispatching actions raw like this very often, you're
going to want to use...

*click*`

export default class Slide3 extends PureComponent {
  render () {
    const {
      height
    } = this.props

    return (
      <Slide
        {...this.props}
        background='#ea3'>
        <h1>actions</h1>
        <List>
          <p>simple object</p>
          <Code style={{height}}>
            {action}
          </Code>
        </List>
      </Slide>
    )
  }
}
