import React from 'react'
import Point from '../Point/Point'

export default function PointList ({points}) {
  const pointsElements = points.map(el => <div key = {el.id}><Point point = {el}/></div>)

  return (
    <div>
      {pointsElements}
    </div>
  )
}