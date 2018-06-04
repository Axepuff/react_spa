import React, {Component} from 'react'
import './Point.css'

class Point extends Component {
  constructor(props) {
    super (props)

    this.state = {
      isOpen: false
    }
  }

  render () {
    const {point} = this.props
    const {isOpen} = this.state
    // const name = point.name
    // const coord = point.coord
    return (
      <div className='point'>
        <div className='point__main'>
          <span className='point__name'>{point.name}</span>
          <span className='point__address'>{point.address}</span>
          <button  className='point__button' onClick = {this.toggleOpen}>
            {isOpen ? '–' : '+'}
          </button>
        </div>
        {this.getBody()}
      </div>
    )
  }

  getBody () {
    if (!this.state.isOpen) {return null}
    const {point} = this.props
    return <div className='point__detail'>{point.details}</div>
  }

  toggleOpen = (event) => {
    event.preventDefault()

    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default Point