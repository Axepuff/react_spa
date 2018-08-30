import React from 'react'
import {Provider} from 'react-redux'
import AppContainer from './components/AppContainer'
import PointList from './components/PointList'
import Filter from './components/Filter'
import AddPoint from './components/AddPoint'
import Header from './components/Header'
import {data} from './data'
import store from './store'

export default function App() {
  return (
    <Provider store = {store}>
      <AppContainer>
        <Header/>
        <Filter txt='по дате'/>
        <PointList/>
        <AddPoint/>
      </AppContainer>
    </Provider>
  )
}
