import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
  state = {
    pointName: '',
  }

  handleName = (ev) => {
    if (ev.target.value.length > 25) { return }

    this.setState({
      pointName: ev.target.value,
    })
  }

  render() {
    const { pointName } = this.state
    return (
      <div className="form-wrapper">
        <input type="text" value={pointName} onChange={this.handleName} />
      </div>
    )
  }
}
