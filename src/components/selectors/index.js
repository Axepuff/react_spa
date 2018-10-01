import { createSelector } from 'reselect'

const filtersGetter = state => state.filterDate
const pointsGetter = state => state.points

const filtratePointsSelector = createSelector(
  filtersGetter,
  pointsGetter,
  (filterDate, points) => points
    .filter(point => filterDate.find(filteredPoint => filteredPoint.id === point.id)),
)

export default filtratePointsSelector
