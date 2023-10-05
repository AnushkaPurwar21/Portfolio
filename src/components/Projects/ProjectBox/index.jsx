import React from "react";
import './index.scss';
import { FiFolder } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { TbBrandGithub } from "react-icons/tb";

const ProjectBox = ({ link1, link2, title, content, skills, color }) => {
    const hasLink1 = link1 && link1.trim() !== "";
    const hasLink2 = link2 && link2.trim() !== "";

    return (
        <div className="boxP" style={{ backgroundColor: color }}>
            <div className="icon">
                <div className="i-left">
                    <FiFolder />
                </div>
                <div className="i-right">
                    {hasLink1 && <a href={link1} target='_blank'><TbBrandGithub color="#2E4C76" /></a>}
                    {hasLink2 && <a href={link2} target='_blank'><HiOutlineExternalLink color="#2E4C76" /></a>}
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
                    {skills && skills.length > 0 ? (
                        skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))
                    ) : (
                        <li>No skills available</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default ProjectBox;
