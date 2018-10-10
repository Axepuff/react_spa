import { FILTER_BY_DATE } from '../constants'
import { points } from '../data'

export default (defaultPoints = points, action) => {
  const { type, payload } = action

  switch (type) {
    case FILTER_BY_DATE: {
      return defaultPoints.filter((point) => {
        if (!point.date) {
          return false
        }
        const from = new Date(point.date.from)
        const to = new Date(point.date.to)
        return from > payload.date.from && to < payload.date.to
      })
    }
    default:
      break
  }
  return defaultPoints
}
