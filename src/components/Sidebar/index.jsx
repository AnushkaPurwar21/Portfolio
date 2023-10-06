import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {Link, NavLink} from 'react-router-dom';
import './index.scss';
import { faHouse } from "@fortawesome/free-solid-svg-icons"; 
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { MdWork, MdMenuOpen, MdClose } from "react-icons/md";
import logo from '../../assets/images/logo.svg';


const Sidebar =() =>{
    const [showNav, setShowNav]= useState(false);

    return(
        <div className="nav-bar">
        <div className="logo">
        </div>
            <nav className={showNav ? "mobile-show" : ""}> 
                <NavLink exact="true" activeclassname="active" to="/home" className="home-link">
                    <FontAwesomeIcon icon={faHouse} color="#B4B7C1" />
                </NavLink>
                
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#B4B7C1" />
                </NavLink>
                
                <NavLink exact="true" 
                activeclassname="active" className="work-link" to="/work">
                    <MdWork color="#B4B7C1" />
                </NavLink>
                
                <NavLink exact="true" activeclassname="active" 
                className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#B4B7C1" />
                </NavLink>
                <MdClose className="close-icon" color="#B4B7C1" onClick={()=>setShowNav(false)}/>
            </nav>
            <FontAwesomeIcon icon={faBars} 
            color="#001C40"  
            size="3x"
            className="hamburger" 
            onClick={()=>setShowNav(true)}/>
            {/* <MdMenuOpen className="hamburger" color="#001C40" onClick={()=>{setShowNav(true)}}/> */}
        </div>  
    );
}

export default Sidebar;