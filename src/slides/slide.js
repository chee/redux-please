import React from 'react'
import styled from 'styled-components'

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  white-space: normal;
  justify-content: center;
  align-items: center;
  background: ${props => props.background};
  transition: background 2s ease-in-out;
`

export default class extends React.PureComponent {
  componentDidMount () {
    this.updateHandler()
  }

  componentDidUpdate (prevProps) {
    this.updateHandler(prevProps)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  updateHandler = (prevProps = {}) => {
    const {
      active
    } = this.props

    if (active && !prevProps.active) {
      window.addEventListener('keydown', this.handleKeyDown)
    }

    if (!active && prevProps.active) {
      window.removeEventListener('keydown', this.handleKeyDown)
    }
  }

  handleKeyDown = event => {
    const space = 32
    const left = 37
    const right = 39

    switch (event.keyCode) {
      case space: {
        return this.forward()
      }
      case left: {
        return this.back()
      }
      case right: {
        return this.forward()
      }
      default:
    }
  }

  forward = () => {
    const handler = this.props.forward || this.props.incrementSlide
    handler()
  }

  back = () => {
    const handler = this.props.back || this.props.decrementSlide
    handler()
  }

  render () {
    return (
      <Slide
        {...this.props}
        onClick={this.forward}
      />
    )
  }
}
