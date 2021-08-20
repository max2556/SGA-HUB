import React, { useContext } from 'react'

export const FooterBar = () => {
  //Функция логаута
  


  //NavBar взят с materialize
  return (
    <nav id="footer">
      <div className="nav-wrapper grey darken-4" style={{padding: "0 2rem"}}> 
        <ul id="nav-mobile" className="hide-on-med-and-down" >
          <li >
            <span>SGA</span>
          </li>
          <li >
            <span>IMPORTANT NEWS</span>
          </li>
        </ul>
      </div>
    </nav>
  )
}
