import {createStore, applyMiddleware} from 'redux'
import {ping} from './enhancers/ping'
import reducer from '../reducer'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(ping))

export default store