import React, {Component} from 'react'
import PropTypes from 'prop-types'
import store from '../../store'
import Point from '../Point/'
import './PointList.css'
import accordeon from '../../decorators/Accordeon'
import {connect} from 'react-redux'

class PointList  extends Component {
  static propTypes = {
    //from connect
    points: PropTypes.array.isRequired,
    //from accordeon
    openId: PropTypes.string
  }

  render () {
    const {points} = this.props
    const pointsElements = points.map(el => 
        <Point 
          key = {el.id}
          point = {el}
          isOpen = {el.id === this.props.accordeon.openId}
          toggleOpen = {this.props.accordeon.toggleItem(el.id)}
          dateRange = {this.props.dateRange}
        />
    )
    
    return (
      <div className = 'point-list'>
          {pointsElements}
      </div>
    )
  }

  toggleItem = (openId) => ev => {
    this.setState({openId})
  }
}

// export default connect(({points}) => ({points}))(accordeon(PointList))
export default connect(({points, dateRange}) => ({points, dateRange}))(accordeon(PointList))