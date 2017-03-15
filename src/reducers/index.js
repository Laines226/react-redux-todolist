import { combineReducers } from 'redux'
import todos from './todos'
import filterterm from './filterterm'

const todoApp = combineReducers({
  todos,
  filterterm
})

export default todoApp