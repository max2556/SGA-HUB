import React from "react";
import { PopularIndustries } from "./PopularIndustries";


export const ProjectsMainPage = () =>{
    return (
        <>
            <div className="grey home-holder white-text">
                <button className="btn blue accent-4 my-projects-btn">
                    Мои проекты
                </button>

                <div className="row search-row">
                    <div className="input-field white-black-field search-field">
                        <input
                            placeholder="Поиск (введите метки)"
                            id="search"
                            type="text"
                            name="search"
                            className="black-input"        
                        />
                    </div>
                    <button className="btn black search-btn">
                        поиск
                    </button>
                </div>

                <PopularIndustries></PopularIndustries>
            </div>
            <div className="background-Img"></div>
        </>
    );
}