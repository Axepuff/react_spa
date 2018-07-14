import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {deletePoint} from '../../AC'
import './Point.css'

class Point extends Component {
  static propTypes = {
    point: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      details: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  render () {
    const {point, isOpen, toggleOpen} = this.props

    return (
      <div className='point' ref = {this.setPointRef}>
        <div className='point__main'>
          <span className='point__name'>{point.name}</span>
          <span className='point__address'>{point.address}</span>
          <button  className='point__button' onClick = {toggleOpen}>
            {isOpen ? '–' : '+'}
          </button>
          <button  className='point__button point__button_del' onClick = {this.handleDelete}>
            -
          </button>
        </div>
        <CSSTransition
          in = {this.props.isOpen}
          key = {point.id}
          timeout = {300}
          appear
          classNames = 'fade'>
            <div>{this.getBody()}</div>
          </CSSTransition>
      </div>
    )
  }

  handleDelete = () => {
    const {deletePoint, point} = this.props
    deletePoint(point.id)
  }

  setPointRef = ref => {
    this.pointView = ref
  }

  getBody () {
    if (!this.props.isOpen) {return null}
    const {point} = this.props
    return <div className='point__detail'>{point.details}</div>

  }
}

export default connect(null, { deletePoint })(Point)