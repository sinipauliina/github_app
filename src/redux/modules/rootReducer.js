import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import reposReducer from './repos'
import commitsReducer from './commits'

const rootReducer = history => {
  return combineReducers({
    repos: reposReducer,
    commits: commitsReducer,
    router: connectRouter(history),
  })
}

export default rootReducer
