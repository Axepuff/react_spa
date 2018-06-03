import React from 'react'
import {render} from 'react-dom'

function HelloWorld() {
  return <h1>Hello</h1>
}

render(<HelloWorld />, document.getElementById('container'))