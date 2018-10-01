import React, { Component } from 'react'

export default Original => class accordeon extends Component {
  state = {
    openId: null,
  }

  render() {
    return <Original {...this.props} accordeon={{ ...this.state, toggleItem: this.toggleItem }} />
  }

  toggleItem = PointId => (ev) => {
    ev && ev.preventDefault && ev.preventDefault()
    if (this.state.openId === PointId) {
      this.setState({
        openId: null,
      })
    } else {
      this.setState({
        openId: PointId,
      })
    }
  }
}
