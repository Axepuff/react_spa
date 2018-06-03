import React from 'react'
import {render} from 'react-dom'
import Point from './components/Point/Point'
import {data} from './data'


render(<Point point = {data}/>, document.getElementById('container'))