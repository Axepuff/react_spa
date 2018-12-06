import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  FiChevronDown, FiChevronUp, FiX, FiMap,
} from 'react-icons/fi'
import { CSSTransition } from 'react-transition-group'
import { deletePoint } from '../../AC'
import CommentsList from '../CommentsList'
import Dates from './Dates.js'
import Btn from './Btn'
import Distance from './Distance'
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
    delPointHandler: PropTypes.func,
  }

  setPointRef = (ref) => {
    this.pointView = ref
  }

  getBody() {
    const { isOpen, point } = this.props
    if (!isOpen) { return null }
    return (
      <div className="point__detail">
        <div className="point__detail-row">{point.address}</div>
        <div className="point__detail-row">{point.details}</div>
        <CommentsList point={point} />
      </div>
    )
  }

  handleDelete = () => {
    const { delPointHandler, point } = this.props
    delPointHandler(point.id)
  }

  render() {
    const { point, isOpen, toggleOpen } = this.props

    return (
      <div className="point" ref={this.setPointRef}>
        <div className="point__main">
          <div className="point__name">{point.name}</div>
          <Distance remote="50">50</Distance>
          <Btn area="m" theme="primary"><FiMap /></Btn>
          <Btn area="o" theme="primary" onClick={toggleOpen}>{isOpen ? <FiChevronUp /> : <FiChevronDown />}</Btn>
          <Btn area="c" theme="danger" onClick={this.handleDelete}><FiX /></Btn>
          <Dates pointDate={point.date} />
        </div>
        <CSSTransition
          in={isOpen}
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
}

export default connect(null, { delPointHandler: deletePoint })(Point)
