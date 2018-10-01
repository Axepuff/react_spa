import {SET_DATE} from '../constants'
import { data as points } from "../data"

export default (date = {from: null, to: null}, action) => {
  const {type} = action
  switch (type) {
    case SET_DATE: {
      const {from, to} = action.payload.date
      return {from, to}
    }
  }
  return date
}