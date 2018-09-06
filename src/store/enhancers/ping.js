export const ping = store => next => action => {
  console.log('ping');
  return next(action);
}