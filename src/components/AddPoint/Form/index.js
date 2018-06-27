import React, { Component } from "react"
import './Form.css'

export default class Form extends Component {

  state = {
    pointName: ''
  }

  render() {
    return (
      <div className = 'form-wrapper'>
        <input type = 'text' value = { this.state.pointName } onChange = { this.handleName }/>
      </div>
    )
  }

  handleName = (ev) => {
    if (ev.target.value.length > 25) {return}

    this.setState({
      pointName: ev.target.value
    })
  }

}
