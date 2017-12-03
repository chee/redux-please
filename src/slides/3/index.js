import React, {PureComponent} from 'react'
import styled from 'styled-components'

import Slide from '../slide'

import lostLevels from '../../images/lost-levels.gif'

const Image = styled.img`
  width: 80vh;
  margin: auto;
`

export default class Slide3 extends PureComponent {
  render () {
    return (
      <Slide
        {...this.props}
        background='#393633'>
        <Image
          src={lostLevels}
        />
      </Slide>
    )
  }
}
