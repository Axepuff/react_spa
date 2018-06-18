import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
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
        </div>

          {this.getBody()}
      </div>
    )
  }

  setPointRef = ref => {
    this.pointView = ref
  }

  // componentDidMount() {
  //   console.log('---', this.pointView)
  // }

  getBody () {
    if (!this.props.isOpen) {return null}
    const {point} = this.props
    return <CSSTransition
      in = {this.props.isOpen}
      key={point.id}
      timeout={{
        enter: 500,
        exit: 500,
       }}
      unmountOnExit
      classNames = 'fade'>
        <div className='point__detail'>{point.details}</div>
    </CSSTransition>
  }
}

export default Point