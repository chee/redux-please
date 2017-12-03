import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

import slides from './slides'
import {Motion, spring, presets} from 'react-motion'

import * as mapDispatchToProps from './store/actions'

function getRandomPreset () {
  const items = Object.values(presets)
  return items[Math.floor(Math.random() * items.length)]
}

class App extends PureComponent {
  handleClick = event => {
    this.preset = getRandomPreset()
  }

  render () {
    const {
      currentSlide
    } = this.props

    const slide = currentSlide % slides.length

    return (
      <Motion
        defaultStyle={{translateX: 0}}
        style={{translateX: spring(-(slide * 100), this.preset)}}>
        {({translateX}) =>
          <main
            onClick={this.handleClick}
            style={{
              transform: `translateX(${translateX}vw)`
            }}>
            {slides.map(({default: Slide}, index) =>
              <div
                key={index}
                className='slide-wrapper'>
                <Slide
                  {...this.props}
                  active={slide === index}
                />
              </div>
            )}
          </main>
        }
      </Motion>
    )
  }
}

function mapStateToProps ({currentSlide}) {
  return {
    currentSlide
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
