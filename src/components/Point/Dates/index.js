import React from "react"
import './dates.css'

export default function Dates(props) {
  const {from, to} = props.dateRange

  return (
    <div className = 'dates'>
      <div>с {from ? from.toLocaleDateString() : 'выберите дату прибытия'}</div>
      <div>по {to ? to.toLocaleDateString() : 'выбери дату отбытия'}</div>
    </div>
  )
}