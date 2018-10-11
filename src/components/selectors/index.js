import { createSelector } from 'reselect'

const filtersGetter = state => state.filterDate
const pointsGetter = state => state.points
const commentsGetter = state => state.comments
const idGetter = (state, props) => props.id

export const filtratePointsSelector = createSelector(
  filtersGetter,
  pointsGetter,
  (filterDate, points) => points
    .filter(point => filterDate.find(filteredPoint => filteredPoint.id === point.id)),
)

export const commentsSelector = createSelector(
  commentsGetter,
  idGetter,
  (comments, id) => comments.find(comment => comment.id === id),
)
