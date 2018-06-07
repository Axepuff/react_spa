import React, {Component as ReactComponent} from 'react'

let Opener = (Original) => class OpenerWrapper extends ReactComponent {
  state = {
    isOpen: false
  }

  render() {
    return <Original {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
  }

  toggleOpen = (event) => {
    event && event.preventDefault && event.preventDefault()

    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default Opener