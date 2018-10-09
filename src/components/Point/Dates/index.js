import React from 'react'
import PropTypes from 'prop-types'
import './dates.css'

export default function Dates(props) {
  const { pointDate } = props
  return (
    <div className="dates">
      <div>
с&nbsp;
        {pointDate.from ? new Date(pointDate.from).toLocaleDateString() : 'выберите дату прибытия'}
      </div>
      <div>
по&nbsp;
        {pointDate.to ? new Date(pointDate.to).toLocaleDateString() : 'выбери дату отбытия'}
      </div>
    </div>
  )
}

Dates.propTypes = {
  pointDate: PropTypes.object,
}
