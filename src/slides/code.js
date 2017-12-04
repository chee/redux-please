import React from 'react'
import styled from 'styled-components'

const background = '#333'

const Code = styled.code`
  font-weight: 100;
  border-radius: 5px;
  font-size: 14px;
  display: block;
  padding: 1em;
  background: ${background};
  max-width: 80vw;
  white-space: pre-wrap;
`

export default props =>
  <div
    style={{background}}
    ref={props.setRef}>
    <Code {...props} />
  </div>
