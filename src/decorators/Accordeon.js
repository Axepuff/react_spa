import React, { Component } from 'react'

export default Original => class accordeon extends Component {
  state = {
    openId: null,
  }

  toggleItem = PointId => (ev) => {
    ev && ev.preventDefault && ev.preventDefault()
    const { openId } = this.state
    if (openId === PointId) {
      this.setState({
        openId: null,
      })
    } else {
      this.setState({
        openId: PointId,
      })
    }
  }

  render() {
    return <Original {...this.props} accordeon={{ ...this.state, toggleItem: this.toggleItem }} />
  }
}
