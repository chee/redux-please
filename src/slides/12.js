import React, {PureComponent} from 'react'
import styled from 'styled-components'

import Slide from './slide'

import ladybird from '../images/ladybird-book-of-redux.png'

const Image = styled.img`
  width: 80vh;
  margin: auto;
`

export const notes = ' '

export default class Slide3 extends PureComponent {
  render () {
    return (
      <Slide
        {...this.props}
        background='#cceeff'>
        <Image
          src={ladybird}
        />
      </Slide>
    )
  }
}
