import React from 'react'
import Point from '../Point/Point'
import './PointList.css'

export default function PointList ({points}) {
  const pointsElements = points.map(el =><Point key = {el.id} point = {el}/>)

  return (
    <div className = 'point-list'>
      {pointsElements}
    </div>
  )
}