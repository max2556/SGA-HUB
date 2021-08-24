import React from "react";
import { Link } from "react-router-dom";


export const PopularIndustries = ()=>{
    return(
        <div className="center-align">
            <div className="bar-wrapper row">
                <span className="black-text">Популярные отрасли:</span>
                <div className="bar-body">
                    <Link to="/project-theme/blender"><p className="industry-icon">Blender</p></Link>
                    <Link to="/project-theme/Unity"><p className="industry-icon">Unity</p></Link>
                    <Link to="/project-theme/CSharp"><p className="industry-icon">C#</p></Link>

                    <button className="btn black search-btn">
                    Прочие
                    </button>
                </div>
            </div>
        </div>
    )
}