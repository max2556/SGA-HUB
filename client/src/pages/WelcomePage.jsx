import React from "react";
import { NavLink, Redirect,Link } from "react-router-dom";

//Допустим, что на первое время сделано неплохо
export const WelcomePage = () =>{
    return (
        <>
        <div id="c-row" className="row">
            <div id="logo-text" className="">
                <h4 id="vertical-h4" className="col">HUB</h4>
                <h4 className="col" id="SGA_Container">
                    <div className="" style={{color: "#149CFF"}}>Superior</div>
                    <div className="" style={{color: "#149CFF"}}>Geeks</div>
                    <div className="" style={{color: "#149CFF"}}>Association</div>
                </h4>
            </div>
        </div>
        <div className="button-holder center-align">
                <Link to="/login">
                    <button className="btn white black-text" style={{ marginRight: 10 }}>
                        Войти
                    </button>
                </Link>
                <Link to="/register">
                    <button href="/register" className="btn black white-text" >
                        Регистрация
                    </button>
                </Link>
        </div>
        </>
    );
}