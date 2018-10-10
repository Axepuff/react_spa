import { combineReducers } from 'redux'
import points from './points'
import comments from './comments'
import count from './counter'
import filterDate from './filterDate'
// import selectReducer from './select'
import dateRangeReducer from './dateRange'

export default combineReducers({
  count,
  points,
  comments,
  // selected: selectReducer,
  dateRange: dateRangeReducer,
  filterDate,
})
