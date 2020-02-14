import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import reposReducer from './repos'
import commitsReducer from './commits'
import namesReducer from './names'

const rootReducer = history => {
  return combineReducers({
    repos: reposReducer,
    commits: commitsReducer,
    names: namesReducer,
    router: connectRouter(history),
  })
}

export default rootReducer
