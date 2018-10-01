import { FILTER_BY_DATE } from "../constants"
import { data as points } from "../data"

// export default (defaultPoints = points, date = {from: null, to: null}, action) => {
export default (defaultPoints = points, action) => {
  const {type, payload} = action

  switch (type) {
    case FILTER_BY_DATE: {
      // console.log('payload', payload);
      // console.log('defaultPoints', defaultPoints);
      return defaultPoints.filter(point => {
        if (!point.date) {
          return false
        }
        const from = new Date(point.date.from)
        const to = new Date(point.date.to)
        return from > payload.date.from && to < payload.date.to
      })
    }
  }
  return defaultPoints
}