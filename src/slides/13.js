import React, {PureComponent} from 'react'

import Slide from './slide'

export const notes = ' '

export default class Slide3 extends PureComponent {
  render () {
    return (
      <Slide
        {...this.props}
        background={this.props.active ? '#339c9c' : '#aaeeff'}>
        Enhancers
      </Slide>
    )
  }
}
