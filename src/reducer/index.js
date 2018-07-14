import { combineReducers } from 'redux'
import points from './points'
import count from './counter'
// import selectReducer from './select'
import dataRangeReducer from './dateRange'

export default combineReducers({
  count: count,
  points,
  // selected: selectReducer,
  dataRange: dataRangeReducer
})