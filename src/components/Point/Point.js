import React, {Component} from 'react'

function HelloWorld() {
  return <h1>Hello</h1>
}

class Point extends Component {
  constructor(props) {
    super (props)

    this.state = {
      isOpen: true
    }
  }

  render () {
    const {point} = this.props
    const {isOpen} = this.state
    // const name = point.name
    // const coord = point.coord
    return (
      <div>
        <span>{point.name}</span>
        <span>{point.address}</span>
        <button onClick = {this.toggleOpen}>
          {isOpen ? 'Свернуть' : 'Подробности'}
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody () {
    if (!this.state.isOpen) {return null}
    const {point} = this.props
    return <div>{point.details}</div>
  }

  toggleOpen = (event) => {
    event.preventDefault()
    console.log(event)
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default Point