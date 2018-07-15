import React, { Component } from 'react'
import {connect} from 'react-redux'
import DayPicker, { DateUtils } from 'react-day-picker'
import MomentLocaleUtils from 'react-day-picker/moment'
import {setDate} from '../../../AC'
import 'react-day-picker/lib/style.css'
import './Calendar.css'

class Calendar extends Component {
  state = {
    from: null,
    to: null
  }

  render() {
    const { from , to } = this.state
    const modifiers = { start: from, end: to }

    return (
      <div className = 'calendar-wrapper'>
        <DayPicker 
          numberOfMonths={2}
          localeUtils={MomentLocaleUtils}
          locale={'ru'}
          className="Selectable"
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
      </div>
    )
  }

  getInitialState = () => {
    return {
      from: null,
      to: null
    }
  }

  handleDayClick = (day) => {
    const {setDate} = this.props
    const range = DateUtils.addDayToRange(day, this.state)
    console.log(range)
    this.setState(range)
    setDate(range)
  }

  handleResetClick = () => {
    this.setState(this.getInitialState())
  }

  clickDay = (day) => {
    this.setState({selectedDay: day})
  }
}

export default connect(null, {setDate})(Calendar)