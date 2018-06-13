import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Opener from '../../decorators/opener'
import './Point.css'

class Point extends Component {
  proptypes = {
    point: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      details: PropTypes.string
    }).isRequired
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
    return <div className='point__detail'>{point.details}</div>
  }
}

export default Point