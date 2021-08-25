import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export const EmptyBar = () => {
  //const auth = useContext(AuthContext) //Сам логаут идет из контекста
  const history = useHistory()
  //Функция логаута

  //NavBar взят с materialize
  return (
    <nav>
      <div className="nav-wrapper grey darken-4" style={{ padding: '0 2rem' }}>
        <ul id="nav-mobile" className="hide-on-med-and-down">
          <li>
            Добро пожаловать!
          </li>
        </ul>
      </div>
    </nav>
  )
}
