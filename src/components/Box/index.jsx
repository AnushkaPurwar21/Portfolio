import React from "react";
import './index.scss';

const Box = ({title,comp, duration}) =>{
    return(
        <div className="box">
            <h3>{title}</h3>
            <p>{comp}</p>
            <p>{duration}</p>
        </div>
    );
}

export default Box;
