export const ping = store => next => action => {
  console.log(action.payload)
  return next(action)
}