import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment } from '../../AC'
import Form from './Form'
import './addPoint.css'

class AddPoint extends Component {
  static propTypes = {
    counter: PropTypes.number,
  }

  handleIncrement = () => {
    const { incrementAction } = this.props
    incrementAction()
  }

  render() {
    const { counter } = this.props
    return (
      <div className="add-point">
        <Form />
        {/* <ExpandBtn toggleOpen={toggleOpen} isOpen={isOpen} txt="Добавить точку" /> */}
        <div>{counter}</div>
        <button type="button" onClick={this.handleIncrement}>+++</button>
      </div>
    )
  }
}

export default connect(state => ({
  counter: state.count,
}), { incrementAction: increment })(AddPoint)
