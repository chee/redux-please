import React, {PureComponent} from 'react'

import Slide from './slide'
import Code from './code'

export const notes = ' '

const code = `const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

const createAction = type => payload => ({
  type,
  payload
})

const request = createAction(REQUEST)
const success = createAction(SUCCESS)
const failure = createAction(FAILURE)

const fetchDogs = () => (dispatch, getState) {
    dispatch(request())

  return fetch('/dogs')
      .then(response => dispatch(success(response)))
      .catch(error => dispatch(failure(error)))
}

store.dispatch(fetchDogs())`

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
            async
          </small>
        </p>
        <Code setRef={node => { this.codeNode = node }}>
          {code}
        </Code>
      </Slide>
    )
  }
}
