import { data as defaultPoints } from '../data'
import { DELETE_POINT } from '../constants'

export default (pointState = defaultPoints, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_POINT: return pointState.filter(point => point.id !== payload)
  }

  return pointState
}
