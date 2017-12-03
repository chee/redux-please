import React, {PureComponent} from 'react'
import styled from 'styled-components'

import Logo from '../../images/redux-logo'

import Slide from '../slide'

const Title = styled.h1`
  margin: 0;
  font-size: .8em;
  flex: .1;
`

const LogoWrapper = styled.figure`
  height: 20vw;
  width: 20vw;
  background-size: cover;
  padding: 0;
  margin: 0;
`

const Subtitle = styled.p`
  font-size: .5em;
  font-style: italic;
  margin: 0;
  flex: .5;
  font-family: satisfy;
`

export default class Slide0 extends PureComponent {
  render () {
    return (
      <Slide
        {...this.props}
        background='#33ccff'>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Title>
          Redux
        </Title>
        <Subtitle>
          a global immutable state store
        </Subtitle>
      </Slide>
    )
  }
}
