import React from 'react'
import AppContainer from './components/AppContainer/AppContainer'
import PointList from './components/PointList/PointList'
import Header from './components/Header/Header'
import {data} from './data'

export default function App() {
  return (
    <AppContainer>
      <Header/>
      <PointList points = {data}/>
    </AppContainer>
  )
}
