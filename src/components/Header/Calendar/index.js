import React, { Component } from 'react'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import './Calendar.css'

export default class Calendar extends Component {
  state = {
    selectedDay: null
  }

  clickDay = (day) => {
    this.setState({selectedDay: day})
  }

  render() {
    return (
      <div className = 'calendar-wrapper'>
        <DayPicker />
      </div>
    )
  }
}