import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { WelcomePage } from './pages/WelcomePage'

//Важная штука
//Возвращает одно, если авторизованы, и другое если нет
export const useRoutes = (isAuthenticated) => {
  return (
    <Switch>
      <Route path="/" exact>
        <WelcomePage></WelcomePage>
      </Route>
      <Route path="/login">
        <LoginPage></LoginPage>
      </Route>
      <Route path="/register">
        <RegisterPage></RegisterPage>
      </Route>
      <Redirect to="/"></Redirect>
    </Switch>
  )
}
