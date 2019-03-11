import React from 'react'
import { Route, Redirect } from "react-router-dom"

const isLogged = () => {
  return true
}

const MainRouter = (props) => 
  isLogged() ? (<Route {...props} render={()=><Redirect to={props.to}/>} />) : <Redirect to="/login"/>

const PrivateRouter = (props) => 
  isLogged() ? (<Route {...props} />) : <Redirect to="/login"/>

export { MainRouter, PrivateRouter }