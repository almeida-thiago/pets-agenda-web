import React from 'react'
import { Route, Redirect } from "react-router-dom"

const isLogged = () => {
  const localData = JSON.parse(localStorage.getItem('PETS_AGENDA'))
  if (localData && localData.token.length && localData.user.length) return true
  return false
}

const MainRouter = (props) =>
  isLogged() ? (<Route {...props} render={() => <Redirect to={props.to} />} />) : <Redirect to="/login" />

const PrivateRouter = (props) =>
  isLogged() ? (<Route {...props} />) : <Redirect to="/login" />

export { MainRouter, PrivateRouter }