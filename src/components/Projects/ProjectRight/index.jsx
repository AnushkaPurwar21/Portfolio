import React from "react";
import './index.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
const ProjectRight= ({img,title,content,skill1,skill2,skill3, color})=>{
    return(
        <div className="pr1">
        <img src={img} alt="pr1" />
        <div className="txt">
            <div className="title">
                {title}
            </div>
            <div className="content" style={{backgroundColor:color}}>
            {content}
            </div>
            <div className="skills">
                <ul>
                    <li>{skill1}</li>
                    <li>{skill2}</li>
                    <li>{skill3}</li>
                </ul>
            </div>
            <div className="icons">
            <a href=""><FontAwesomeIcon icon={faGithubAlt} color="#ffffff" /></a>
            <a href=""><FontAwesomeIcon icon={faExternalLink} color="#ffffff" /></a>
            </div>
        </div>
    </div>
    );
}

export default ProjectRight;