import { FILTER_BY_DATE } from "../constants"
import { data as points } from "../data"

// export default (defaultPoints = points, date = {from: null, to: null}, action) => {
export default (defaultPoints = points, action) => {
  const {type, payload} = action

  switch (type) {
    case FILTER_BY_DATE: {
      
      return defaultPoints.filter(point => {
        if (!point.dateRange) {
          return false
        }
        return point.dateRange.from > payload.from && point.dateRange.to < payload.to
      })
    }
  }
  return defaultPoints
}