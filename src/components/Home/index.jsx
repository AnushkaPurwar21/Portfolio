import { Link } from 'react-router-dom';
import './index.scss';
import Girl from '../../assets/images/girl6.svg';
import { BsVectorPen } from "react-icons/bs";
import { HiCode } from "react-icons/hi";
import { SiAndroid } from "react-icons/si";
import { motion } from 'framer-motion';
import { createContext, useState } from 'react';
import Switch from '../Switch';
import ContactBottom from '../ContactBottom';

export const ThemeContext = createContext('light');
const Home = () => {
    const [isToggled, setIsToggled]=useState(false);
    // const transition= {duration: 2, type: 'spring'};
    return (
        <div className="container">
            <div className="toggle">
                <Switch isToggled={isToggled} onToggle={()=>{
                    setIsToggled(!isToggled)
                }}/>
            </div>
            <div className="text-zone">
                <h1>Hi, I'm
                    <br />
                    {' <h1> '}
                    <span>Anushka</span>
                    {' </h1>'}
                    <br />
                    Frontend Developer
                </h1>
                <h2>Frontend Developer | UI/UX Designer | Android Developer</h2>
                <Link to="/contact" className="flat-button">
                    <p>Contact Me</p>
                </Link>
                <div className="con-socials">
           <ContactBottom/>
            </div>
            </div>
            <div className="home-left">

                <div className="tag1">
                    <div className="h-icon">
                        <HiCode color='#001C40' />
                    </div>
                    <div className="h-text">Frontend</div>
                </div>
                <div className="tag2">
                    <div className="h-icon">
                        <SiAndroid color='#001C40' />
                    </div>
                    <div className="h-text">Android</div>
                </div>
                <div className="tag3">
                    <div className="h-icon">
                        <BsVectorPen color='#001C40' />
                    </div>
                    <div className="h-text">UI/UX Designer</div>
                </div>
                <div className="half-circle">
                </div>
                <img className='home-img' src={Girl} alt="" />
                <div className="circle">
                </div>
            </div>
        </div>
    );
}

export default Home;