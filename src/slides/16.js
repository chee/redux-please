import React, {PureComponent} from 'react'

import Slide from './slide'
import Code from './code'

export const notes = ' '

export default class Slide3 extends PureComponent {
  render () {
    return (
      <Slide
        {...this.props}
        background={this.props.active ? '#336699' : '#339c9c'}>
        <p>
          <small style={{opacity: 0.8}}>
            applyMiddleware
          </small>
        </p>
        <Code style={{opacity: 0.7}}>
          {`let applyMiddleware = (...middleware) => createStore => (...args) => {
  const store = createStore(...args)

    const appliedMiddleware = middleware.map(middleware => middleware(store))

    const dispatch = compose(...appliedMiddleware)(store.dispatch)

    return {
      ...store,
      dispatch
    }
  }
`}
        </Code>
      </Slide>
    )
  }
}
