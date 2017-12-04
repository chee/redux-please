import React, {PureComponent} from 'react'

import Slide from './slide'
import Code from './code'

export const notes = ' '

const code = `const logger = store => nextDispatch => action => {
  console.log(action)
  nextDispatch(action)
}
`

export default class Slide3 extends PureComponent {
  render () {
    return (
      <Slide
        {...this.props}
        background={this.props.active ? '#004477' : '#ff0'}>
        <p>
          <small>
            logging middleware
          </small>
        </p>
        <Code setRef={node => { this.codeNode = node }}>
          {code}
        </Code>
      </Slide>
    )
  }
}
