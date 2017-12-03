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

export default class Slide3 extends PureComponent {
  render () {
    return (
      <Slide
        {...this.props}
        background='#ea3'>
        <h1>actions</h1>
        <List>
          <p>simple object</p>
          <Code>
            {action}
          </Code>
        </List>
      </Slide>
    )
  }
}
