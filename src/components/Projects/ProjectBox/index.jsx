import React from "react";
import './index.scss';
import { FiFolder } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { TbBrandGithub } from "react-icons/tb";


const ProjectBox = ({link1,link2,title,content,skill1,skill2,skill3,color}) => {
    return (
        <div className="boxP" style={{backgroundColor: color}}>
            <div className="icon">
                <div className="i-left">
                    <FiFolder/>
                </div>
                <div className="i-right">
                    <a href={link1} target='_blank'><TbBrandGithub color="#2E4C76" /></a>
                    <a href={link2}  target='_blank'><HiOutlineExternalLink color="#2E4C76" /></a>
                </div>
            </div>
            <div className="b-content">
                <div className="b-title">{title}</div>
                <div className="b-subContent">
                    {content}
                </div>
            </div>
            <div className="b-skill">
                <ul>
                    <li>{skill1}</li>
                    <li>{skill2}</li>
                    <li>{skill3}</li>
                </ul>
            </div>

        </div>
    );
}

export default ProjectBox;