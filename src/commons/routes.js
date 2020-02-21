import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home/Home'
import User from './components/User/User'
import SingleRepo from './components/SingleRepo/SingleRepo'
import NotFound404 from './components/NotFound404/NotFound404'

const routes = (
  <Switch>
    <Route path="/:user/:repo" exact component={SingleRepo} />
    <Route path="/:user" exact component={User} />
    <Route path="/" exact component={Home} />
    <Route component={NotFound404} />
  </Switch>
)

export default routes
