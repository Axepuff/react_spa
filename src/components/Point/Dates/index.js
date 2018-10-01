import React from 'react'
import PropTypes from 'prop-types'
import './dates.css'

export default function Dates(props) {
  const {pointDate} = props
  return (
    <div className = 'dates'>
      <div>с {pointDate.from ? new Date(pointDate.from).toLocaleDateString() : 'выберите дату прибытия'}</div>
      <div>по {pointDate.to ? new Date(pointDate.to).toLocaleDateString() : 'выбери дату отбытия'}</div>
    </div>
  )
}

Dates.propTypes = {
  from: PropTypes.instanceOf(Date),
  to: PropTypes.instanceOf(Date),
}