import {createBrowserHistory} from 'history'
import {applyMiddleware, createStore} from 'redux'
import {routerMiddleware} from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './rootReducer'

export const history = createBrowserHistory()

const configureStore = preloadedState => {
  const middlewares = [thunkMiddleware, routerMiddleware(history)]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(
    rootReducer(history),
    preloadedState,
    composedEnhancers,
  )

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer))
  }

  return store
}

export default configureStore
