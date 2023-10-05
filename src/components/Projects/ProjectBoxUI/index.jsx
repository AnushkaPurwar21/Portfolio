import React from "react";
import './index.scss';
import { FiFolder } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { AiFillBehanceCircle } from "react-icons/ai";

const ProjectBoxUI = ({ imgL, link1, title, content, skill1 }) => {
    return (
        <div className="boxPu" style={{ backgroundColor: '#FFF5F7' }}>
            <div className="img-head">
                <img src={imgL} alt="image" />
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
                </ul>
            </div>
            {link1 && (
                <div className="icon">
                    <a href={link1} target='_blank'><HiOutlineExternalLink color="#183153" /></a>
                </div>
            )}
        </div>
    );
}

export default ProjectBoxUI;
