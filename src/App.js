import React from 'react'
import AppContainer from './components/AppContainer/AppContainer'
import PointList from './components/PointList/PointList'
import Calendar from './components/Calendar/Calendar'
import {data} from './data'

export default function App() {
  return (
    <AppContainer>
      <Calendar/>
      <PointList points = {data}/>
    </AppContainer>
  )
}
