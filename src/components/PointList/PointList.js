import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Point from '../Point/Point'
import './PointList.css'
import Accordeon from '../../decorators/Accordeon';

class PointList  extends Component {
  static propTypes = {
      points: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          address: PropTypes.string.isRequired,
          details: PropTypes.string
        }).isRequired
      ) 

  }

  render () {
    const pointsElements = this.props.points.map(el => 
      <Point 
        key = {el.id}
        point = {el}
        isOpen = {el.id === this.props.accordeon.openPointId}
        toggleOpen = {this.props.accordeon.toggleItem(el.id)}
      />
    )
    
    return (
      <div className = 'point-list'>
        {pointsElements}
      </div>
    )
  }

  toggleItem = (openPointId) => ev => {
    this.setState({openPointId})
  }
}

export default Accordeon(PointList)