import React from 'react'
import 'materialize-css'
import { useRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './contexts/AuthContext'
import { NavBar } from './components/NavBar'
import { RealNavBar } from './components/RealNavBar'
import { Loader } from './components/Loader'
import { FooterBar } from './components/FooterBar'

function App() {
  // { login, logout, token, userId, ready } = useAuth() //Подключаем к основному приложению аутентификацию
  //const isAuth = !!token //Если в хранилище есть токен - значит мы авторизированы
  const isAuth = true;
  const routes = useRoutes(isAuth) //Какие страницы показывать зависит от авторизации

  return (
    
      <BrowserRouter>
        {!isAuth && <NavBar/>}
        {isAuth && <RealNavBar/>}
        <div className="container">{routes}</div>
        <FooterBar/>
      </BrowserRouter>
    
  )
}

export default App
