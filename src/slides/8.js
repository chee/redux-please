import React, {PureComponent} from 'react'
import styled from 'styled-components'

import Slide from './slide'
import Code from './code'

const List = styled.ul`
  font-size: .5em;
  margin: 0;
`

const actionCreator = `removeSausage(22)`

export default class Slide3 extends PureComponent {
  render () {
    return (
      <Slide
        {...this.props}
        background='#da6'>
        <h2>action creators</h2>
        <List>
          <p>return an action</p>
          <Code style={{textAlign: 'center'}}>
            {actionCreator}
          </Code>
        </List>
      </Slide>
    )
  }
}
