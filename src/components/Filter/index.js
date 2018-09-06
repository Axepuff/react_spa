import React from 'react'
import { PropTypes } from "prop-types";
import { connect } from 'react-redux'
import { filterDate } from '../../AC'
import './filter.css'



const Filter = function(props) {
  const { filterDate, dateRange } = props

  let handleFilterClick = () => {
    // console.log(range)
    console.log('filterDate(range)', filterDate(dateRange))
    
    filterDate(dateRange)
  }

  return(
    <div className='filter'>
      <button className='filter__btn' onClick={handleFilterClick}>
        {props.txt ? props.txt : 'фильтр'}
      </button>
      <div>с {dateRange.from ? dateRange.from.toLocaleDateString() : '--'}</div>
      <div>по {dateRange.to ? dateRange.to.toLocaleDateString() : '--'}</div>
    </div>
  )
}

Filter.propTypes = {
  from: PropTypes.instanceOf(Date),
  to: PropTypes.instanceOf(Date),
}

export default connect(({points, dateRange}) => ({points, dateRange}), {filterDate})(Filter)