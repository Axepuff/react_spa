import React, { Component as ReactComponent } from 'react'

const Opener = Original => class OpenerWrapper extends ReactComponent {
  state = {
    isOpen: false,
  }

  render() {
    return <Original {...this.props} {...this.state} toggleOpen={this.toggleOpen} />
  }

  toggleOpen = (event) => {
    const { isOpen } = this.state
    if (event && event.preventDefault) event.preventDefault()

    this.setState({
      isOpen: !isOpen,
    })
  }
}

export default Opener
