import React from 'react'
import 'materialize-css'
import { useRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './contexts/AuthContext'
import { EmptyBar } from './components/EmptyBar'
import { RealNavBar } from './components/RealNavBar'
import { Loader } from './components/Loader'
import { FooterBar } from './components/FooterBar'



function App() {
  const { login, logout, token, userId, ready } = useAuth() //Подключаем к основному приложению аутентификацию
  const isAuth = !!token //Если в хранилище есть токен - значит мы авторизированы
  //const isAuth = true;
  const routes = useRoutes(isAuth) //Какие страницы показывать зависит от авторизации

  if(!ready){
    return(<Loader/>)
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        login,
        logout,
        isAuth,
      }}
    >
      <BrowserRouter>
        {!isAuth && <EmptyBar/>}
        {isAuth && <RealNavBar/>}
        <div className="container">{routes}</div>
        {isAuth && <FooterBar/>}
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
