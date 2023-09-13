import React from "react";
import './index.scss';

const Card = ({img,content,heading})=>{
    return(
        <div className="card">
            <div className="img-box">
            <img src={img} alt="img" />
            </div>
            <div className="mainHead">
                {heading}
            </div>
            <div className="content-text">{content}</div>
        </div>
    );
}

export default Card;