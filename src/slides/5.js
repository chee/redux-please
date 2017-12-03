import React, {PureComponent} from 'react'

import Slide from './slide'

export default class Slide3 extends PureComponent {
  render () {
    return (
      <Slide
        {...this.props}
        background='#ea3'>
        <h1>actions</h1>
      </Slide>
    )
  }
}
