import React from "react";
import { NavLink, Redirect,Link } from "react-router-dom";
import { OnlineBar } from "../components/OnlineBar";
import { PopularTopics } from "../components/PopularTopics";

//Допустим, что на первое время сделано неплохо
export const HomePage = () =>{
    return (
        <>
            <div className="grey home-holder center-align white-text">
                <p>Добро пожаловать!</p>
                <p>Думаю, вы знаете куда попали, не так ли? Но на всякий случай повторю, что SGA - доброе, любящее технологии и компьютеры сообщество, приветствующее новичков в своих рядах.</p>
                <OnlineBar></OnlineBar>
                <PopularTopics></PopularTopics>
            </div>
            <div className="background-Img"></div>
        </>
    );
}