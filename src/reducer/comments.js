import { comments as defaultComments } from '../data'
// import { DELETE_POINT } from '../constants'

export default (commentsState = defaultComments, action) => {
  const { type, payload } = action

  switch (type) {
    default: break
  }

  return commentsState
}
