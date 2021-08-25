import React, { useContext } from 'react'

export const FooterBar = () => {
  //Функция логаута
  


  //NavBar взят с materialize
  return (
    <nav id="footer">
      <div className="nav-wrapper grey darken-4" style={{padding: "0 0.5rem"}}> 
        <ul id="nav-mobile" className="hide-on-med-and-down" >
          <li >
            <p className="sga-logo circular"></p>
          </li>
          <li className="SGA-footer-abbreviation">
            <span className="abbreviation-span">Superior </span>
            <span className="abbreviation-span">Geeks </span>
            <span className="abbreviation-span">Association</span>
          </li>
          <li >
            <span>IMPORTANT NEWS</span>
          </li>
        </ul>
      </div>
    </nav>
  )
}
