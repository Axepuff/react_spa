import React from 'react'
import AppContainer from './components/AppContainer/AppContainer'
import PointList from './components/PointList'
import AddPoint from './components/AddPoint'
import Header from './components/Header'
import {data} from './data'

export default function App() {
  return (
    <AppContainer>
      <Header/>
      <PointList points = {data}/>
      <AddPoint/>
    </AppContainer>
  )
}
