import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Motion, spring} from 'react-motion'
import styled from 'styled-components'

import createAction from '../../store/createAction'
import createReducer from '../../store/createReducer'

import Slide from '../slide'

const initialState = {
  bulletsRevealed: 0
}

const Question = styled.p`
  margin: .2em;
  padding: 0;
`

const Bullet = styled.li.attrs({
  style: ({opacity}) => ({opacity})
})`font-size: .5em;`

const actions = {
  revealBullet: createAction('reveal bullet on slide 2'),
  unrevealBullet: createAction('unreveal bullet on slide 2')
}

export const reducer = createReducer(initialState, {
  [actions.revealBullet.type]: state => ({
    ...state,
    bulletsRevealed: state.bulletsRevealed + 1
  }),
  [actions.unrevealBullet.type]: state => ({
    ...state,
    bulletsRevealed: state.bulletsRevealed - 1
  })
})

class Slide1 extends PureComponent {
  bullets = [
    'a global immutable state store',
    'way less scary than ghosts',
    'small',
    'simple（in the hickiest sense)',
    'framework agnostic'
  ]

  forward = () => {
    const {
      incrementSlide,
      revealBullet,
      bulletsRevealed
    } = this.props

    if (bulletsRevealed < this.bullets.length) {
      revealBullet()
    } else {
      incrementSlide()
    }
  }

  back = () => {
    const {
      decrementSlide,
      unrevealBullet,
      bulletsRevealed
    } = this.props

    if (bulletsRevealed > 0) {
      unrevealBullet()
    } else {
      decrementSlide()
    }
  }

  render () {
    const {
      bulletsRevealed
    } = this.props

    return (
      <Slide
        {...this.props}
        forward={this.forward}
        back={this.back}
        background='#64cc5a'>
        <Question>
          what is it
        </Question>
        <ul style={{margin: 0}}>
          {this.bullets.slice(0, bulletsRevealed).map(bullet =>
            <Motion
              key={bullet}
              defaultStyle={{opacity: 0}}
              style={{opacity: spring(1)}}>
              {({opacity}) =>
                <Bullet
                  key={bullet}
                  opacity={opacity}>
                  {bullet}
                </Bullet>
              }
            </Motion>
          )}
        </ul>
      </Slide>
    )
  }
}

export default connect(state => state.slide1, actions)(Slide1)
