import React, {Component} from 'react'

export default (Original) => class Accordeon extends Component {
  state = {
    openPointId: null
  }

  render() {
    return <Original {...this.props} accordeon = {{...this.state, toggleItem: this.toggleItem}} />
  }

  toggleItem = PointId => ev => {
    ev && ev.preventDefault && ev.preventDefault()
    if (this.state.openPointId === PointId) {
      this.setState({
        openPointId: null
      })
    } else {
      this.setState({
        openPointId: PointId
      })
    }
  }
}