import {
  DELETE_POINT, INCREMENT, SET_SELECT_POINTS, SET_DATE, FILTER_BY_DATE,
} from '../constants'

export function deletePoint(id) {
  return {
    type: DELETE_POINT,
    payload: id,
  }
}

export function increment() {
  return {
    type: INCREMENT,
  }
}

export function selectPoints(selected) {
  return {
    type: SET_SELECT_POINTS,
    payload: { selected },
  }
}

export function filterDate(date) {
  return {
    type: FILTER_BY_DATE,
    payload: { date },
  }
}

export function setDate(date) {
  return {
    type: SET_DATE,
    payload: { date },
  }
}
