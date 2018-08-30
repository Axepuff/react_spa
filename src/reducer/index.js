import { combineReducers } from 'redux'
import points from './points'
import count from './counter'
import filterDate from './filterDate'
// import selectReducer from './select'
import dateRangeReducer from './dateRange'

export default combineReducers({
  count: count,
  points,
  // selected: selectReducer,
  dateRange: dateRangeReducer,
  filterDate: filterDate
})