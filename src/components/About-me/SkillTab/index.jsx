import React from "react";
import './index.scss';
import 'animate.css';

const SkillTab = ({icon, title})=>{
    return(
        <div className="s-tab">
            <div className="icon">
                {icon}
            </div>
            <div className="skill-text">
                {title}
            </div>
        </div>
    );
}

export default SkillTab;