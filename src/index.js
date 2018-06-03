import React from 'react'
import {render} from 'react-dom'
import PointList from './components/PointList/PointList'
import {data} from './data'


render(<PointList points = {data}/>, document.getElementById('container'))
