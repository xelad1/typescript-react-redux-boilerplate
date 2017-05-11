import { combineReducers } from 'redux'
import todos from './todos'
import numberpad from './numberpad'

const rootReducer = combineReducers({
  todos,
  numberpad
})

export default rootReducer
