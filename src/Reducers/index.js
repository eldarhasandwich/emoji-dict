import { combineReducers } from 'redux'

import state from './state'
import responsive from './responsive'

const rootReducer = combineReducers({
  state,
  responsive
})

export default rootReducer