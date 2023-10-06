import React from "react";
import './index.scss';
import { HiOutlineExternalLink } from "react-icons/hi";

const Experience = ({expT,comp,duration,lineO,lineT,lineTh,link}) => {
    return (
        <div className="nav-exp-right">
            <div className="exp-title">
                <div className='desig'> {expT} </div>&nbsp;<div className='company'>@{comp}</div>
                <div className="exp-icon">
                    {link && <a href={link}><HiOutlineExternalLink color='001C40' /></a>}
                </div>
            </div>
            <div className="duration">
                {duration}
            </div>
            <div className="exp-content">
                <ul>
                    <li>{lineO}</li>
                    <li>{lineT}</li>
                    <li>{lineTh}</li>
                </ul>
            </div>

        </div>
    );
}


export default Experience;