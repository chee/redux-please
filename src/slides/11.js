import React, {PureComponent} from 'react'
import styled from 'styled-components'

import Logo from '../images/redux-logo'

import Slide from './slide'

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
  transition: font-size 2s;
  transition-delay: 0.5s;
  font-size: 0.5em;
  font-style: italic;
  margin: 0;
  flex: .5;
  font-family: satisfy;
`

export const notes =
`but why?

state is the hardest thing to manage in an application. global state is really
useful, but very dangerous, because if it is mutable then it has no value. with
asynchronous applications, state can change during a function. if everyone is
reading and writing to state, then you can't know why or what anything is at any
given time.

with redux, with immutable state, the object you are given when you call
\`getState\` is not going to change.

nothing can actually touch that object.
it is a value.

you can make decisions based on it as a value, knowing that it will not change.
and that gives us special powers, because you have never mutated the state and
you've always created new state, you can reverse any change to your state by
simply unapplying the action.

*open devtools*

for instance, with redux developer tools, we can unapply actions and reapply
actions. traveling back and forth through time to our app at any given moment.

*close devtools*

at this point, i was going to finish the talk and say you could read more about
it in the forthcoming Ladybird Book Of Redux

*click*
`

export default class Slide0 extends PureComponent {
  render () {
    const {
      active
    } = this.props

    const style = active
      ? {fontSize: '2.5em'}
      : {}

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
        <Subtitle style={style}>
          but why?
        </Subtitle>
      </Slide>
    )
  }
}
