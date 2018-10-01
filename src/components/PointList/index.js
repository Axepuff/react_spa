import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import filtratePoints from '../selectors'
import Point from '../Point'
import './PointList.css'
import accordeon from '../../decorators/accordeon'

function PointList(props) {
  const { points, accordeon: { openId, toggleItem } } = props
  const pointsElements = points
    .map(el => (
      <Point
        key={el.id}
        point={el}
        isOpen={el.id === openId}
        toggleOpen={toggleItem(el.id)}
        dateRange={el.dateRange}
      />
    ))

  return (
    <div className="point-list">
      {pointsElements}
    </div>
  )
}

PointList.propTypes = {
  // from connect
  points: PropTypes.array.isRequired,
  // from accordeon
  accordeon: PropTypes.shape({
    openId: PropTypes.string,
    toggleItem: PropTypes.func,
  }),
}

// export default connect(({points}) => ({points}))(accordeon(PointList))
export default connect(state => ({ points: filtratePoints(state) }))(accordeon(PointList))
