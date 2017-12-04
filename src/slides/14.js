import React, {PureComponent} from 'react'

import Slide from './slide'

export const notes = ' '

export default class Slide3 extends PureComponent {
  render () {
    return (
      <Slide
        {...this.props}
        background={this.props.active ? '#9c333c' : '#339c9c'}>
        <small style={{opacity: 0.6}}>
          <strike>Enhancers</strike>
        </small>
        Middleware
      </Slide>
    )
  }
}
