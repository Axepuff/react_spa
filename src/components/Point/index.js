import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { deletePoint } from '../../AC'
import Dates from './Dates'
import './Point.css'

class Point extends Component {
  static propTypes = {
    point: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      details: PropTypes.string,
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
  }

  render() {
    const { point, isOpen, toggleOpen } = this.props

    return (
      <div className="point" ref={this.setPointRef}>
        <div className="point__main">
          <span className="point__name">{point.name}</span>
          <div className="point__detail-row"><Dates pointDate={point.date} /></div>
          <button type="button" className="point__button" onClick={toggleOpen}>
            {isOpen ? 'скрыть подробности' : 'подробности'}
          </button>
          <button type="button" className="point__button point__button_del" onClick={this.handleDelete}>
            ×
          </button>
        </div>
        <CSSTransition
          in={this.props.isOpen}
          key={point.id}
          timeout={300}
          appear
          classNames="fade"
        >
          <div>{this.getBody()}</div>
        </CSSTransition>
      </div>
    )
  }

  handleDelete = () => {
    const { deletePoint, point } = this.props
    deletePoint(point.id)
  }

  setPointRef = (ref) => {
    this.pointView = ref
  }

  getBody() {
    if (!this.props.isOpen) { return null }
    const { point } = this.props
    return (
      <div className="point__detail">
        <div className="point__detail-row">{point.address}</div>
        <div className="point__detail-row">{point.details}</div>
      </div>
    )
  }
}

export default connect(null, { deletePoint })(Point)
