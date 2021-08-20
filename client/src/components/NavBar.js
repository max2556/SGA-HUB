import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export const NavBar = () => {
  const auth = useContext(AuthContext) //Сам логаут идет из контекста
  const history = useHistory()
  //Функция логаута

  //NavBar взят с materialize
  return (
    <nav>
      <div className="nav-wrapper grey darken-4" style={{ padding: '0 2rem' }}>
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <li>
            <NavLink to="/">Приветствие</NavLink>
          </li>
          <li>
            <NavLink to="/login">Логин</NavLink>
          </li>
          <li>
            <NavLink to="/register">Регистрация</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
