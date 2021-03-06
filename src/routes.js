import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

/** Components */
import { MainRouter, PrivateRouter } from './routes-private'
import Error404 from './components/error-404'
import { Login, CreateUser } from './components/login'
import Dashboard from './components/dashboard'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <MainRouter exact path="/" to='/dashboard'/>
        <Route path="/login" component={Login} />
        <Route path="/new-user" component={CreateUser} />
        <PrivateRouter path="/dashboard" component={Dashboard} />
        <Route component={Error404} />
      </Switch>
    </Router>
  )
}

export default Routes