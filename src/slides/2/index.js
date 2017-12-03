import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

import styled from 'styled-components'

import fuckingEgghead from '../../images/fucking-egghead.png'

import Slide from '../slide'

import createAction from '../../store/createAction'
import createReducer from '../../store/createReducer'

const Egghead = styled.figure`
  display: flex;
  font-size: .5em;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  width: 50vh;
`

const Note = styled.div`
  font-size: .5em;
`

const Tiny = styled.small`
  font-style: italic;
  font-size: 0.1em;
`

const advanceClock = createAction('slide 3 advance clock')

const initialState = {
  clockIndex: 0
}

export const reducer = createReducer(initialState, {
  [advanceClock.type] (state) {
    return {
      ...state,
      clockIndex: state.clockIndex + 1
    }
  }
})

export const notes =
`these Egghead videos. two hours of video by Dan Abramov, the creator of Redux.
which is followed by another 120 minutes of "Advanced Redux", or "using redux in
practice" or something, that concentrates on using Redux with React.

so, i did that, and I thought "okay, in six hours, i'll know redux." and i
psyched myself up, made a cup of tea, sat down at my computer and *click*`

class Slide2 extends PureComponent {
  clocks = [...Array(12)].map((_, i) => String.fromCodePoint(i + 128336))

  startClock = () => {
    this.clockTimer = setInterval(this.props.advanceClock, 400)
  }

  stopClock = () => {
    clearInterval(this.clockTimer)
  }

  componentDidUpdate (prevProps) {
    const {
      active
    } = this.props

    if (active && !prevProps.active) {
      this.startClock()
    }

    if (!active && prevProps.active) {
      this.stopClock()
    }
  }

  render () {
    const {
      clockIndex
    } = this.props

    const clock = this.clocks[clockIndex % this.clocks.length]

    return (
      <Slide
        {...this.props}
        background='#ec7cac'>
        <Egghead>
          <Image
            src={fuckingEgghead}
          />
          <figcaption>
            these <Tiny>fucking</Tiny> egghead <Tiny>fucking</Tiny> videos
          </figcaption>
        </Egghead>
        <Note>
          {clock} 120 minutes
        </Note>
      </Slide>
    )
  }
}

export default connect(state => state.slide2, {advanceClock})(Slide2)
