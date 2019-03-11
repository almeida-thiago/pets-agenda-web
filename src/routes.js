import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

/** Components */
import { MainRouter, PrivateRouter } from './routes-private'
import Login from './components/login'
import Error404 from './components/error-404'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <MainRouter exact path="/" to='/dashboard'/>
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={() => (<h1>forgot</h1>)} />
        <PrivateRouter path="/dashboard" component={() => (<h1>teste</h1>)} />
        <Route component={Error404} />
      </Switch>
    </Router>
  )
}

export default Routes