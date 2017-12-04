import React, {PureComponent} from 'react'

import Slide from './slide'
import Code from './code'

export const notes = ' '

const code = `const thunk = ({dispatch, getState}) => next => action => {
  if (typeof action !== 'function') return next(action)
  return action(dispatch, getState)
}`

export default class Slide3 extends PureComponent {
  componentDidMount () {
    window.hljs.highlightBlock(this.codeNode)
  }

  render () {
    return (
      <Slide
        {...this.props}
        background='#fcfcfe'>
        <p style={{color: '#333'}}>
          <small>
            thunk middleware
          </small>
        </p>
        <Code setRef={node => { this.codeNode = node }}>
          {code}
        </Code>
      </Slide>
    )
  }
}
