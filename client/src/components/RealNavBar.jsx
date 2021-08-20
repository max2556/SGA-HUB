import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export const RealNavBar = () => {
  const auth = useContext(AuthContext) //Сам логаут идет из контекста
  const history = useHistory()
  //Функция логаута

  //NavBar взят с materialize
  return (
    <nav>
      <div className="nav-wrapper grey darken-4" style={{ padding: '0 2rem' }}>
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <li>
            <NavLink to="/home">Главная</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Проеты</NavLink>
          </li>
          <li>
            <NavLink to="/help"><i className="large material-icons">help_outline</i></NavLink>
          </li>
          <li>
            <NavLink to="/logout"><i className="large material-icons">exit_to_app</i></NavLink>
          </li>
          <li>
            <NavLink to="/chat">Чат</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Профиль</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
