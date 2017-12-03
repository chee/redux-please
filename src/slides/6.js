import React, {PureComponent} from 'react'

import Slide from './slide'

export const notes =
`
and reducers

*click*
`

export default class Slide3 extends PureComponent {
  render () {
    return (
      <Slide
        {...this.props}
        background='#3ea'>
        <h1>reducers</h1>
      </Slide>
    )
  }
}
