import React from "react";
import './index.scss';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
// import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
// import ProjectRight from "../Projects/ProjectRight";
// import ProjectLeft from "../Projects/ProjectLeft";
import ProjectBox from "../Projects/ProjectBox";
import ContactBottom from "../ContactBottom";
import { SiMaterialdesignicons } from "react-icons/si";
import { BsLaptop } from "react-icons/bs";
import { RiFlutterFill } from "react-icons/ri";
import ProjectBoxUI from "../Projects/ProjectBoxUI";
import Ecom from '../../assets/images/Ecom.png';
import room from '../../assets/images/room.png';
import weather from '../../assets/images/weather.png';
import wellness from '../../assets/images/Wellness.svg';
// import Music from "../../assets/images/MusicPlayer.png";
// import Paint from "../../assets/images/PaintBoard.png";
// import Bookie from "../../assets/images/Bookie.png";
// import ToDo from "../../assets/images/ToDo.png";

const Work = () => {
    return (
        <div className="main">
            <div className="work">
                {"<h1>"} <span>My work</span> {"</h1>"}

                {/* <ProjectRight img={ToDo} title="Portfolio"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    skill1="JavaScript"
                    skill2="Node.js"
                    skill3="Hello"
                    color={'#ffd43b'}
                />

                <ProjectLeft
                    img={Paint} title="Portfolio"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    skill1="JavaScript"
                    skill2="Node.js"
                    skill3="Hello"
                />

                <ProjectRight
                    img={Bookie} title="Portfolio"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    skill1="JavaScript"
                    skill2="Node.js"
                    skill3="Hello" /> */}


            </div>
            <div className="head">
                {/* Other Noteworthy Projects */}
                <div className="pro-head">
                    Technical Projects <BsLaptop />
                </div>
                <div className="prbox">
                    <ProjectBox
                        link1="https://github.com/BeginnerCoder21/PaintBoard"
                        link2="https://paint-board.herokuapp.com/"
                        title="Paint Board"
                        content="This is a PaintBoard developed using HTML, CSS and 
                JavaScript with Node.js as backend.
                Create your drawings, erase, add sticky notes, download 
                your drawings."
                        skill1="HTML"
                        skill2="CSS"
                        skill3="Node.js"
                        color={'#ffd43b'}

                    />
                    <ProjectBox
                        link1="https://github.com/BeginnerCoder21/MyPortfolio_Flutter"
                        link2="https://drive.google.com/file/d/1hSyYTg3KjU7DoZiypH0qS9JEu_by5Xv2/view?usp=sharing"
                        title="Portfolio App"
                        content="It's a Portfolio app, created using Flutter. You can download the
                APK file and check out my skills and projects and can connect with 
                me on my socials."
                        skill1="Flutter"
                        skill2=""
                        skill3=""
                        color={'#74c0fc'}
                    />
                    {/* <ProjectBox 
                link1="https://github.com/BeginnerCoder21/GipySearchEngine.io"  
                link2="https://beginnercoder21.github.io/GipySearchEngine.io/"
                title="Giphy Search Engine"
                content="It's a Giphy search engine made with HTML, 
                CSS, and JavaScript. Search through some Giphys."
                skill1="HTML"
                skill2="CSS"
                skill3="JavaScript"
                color={'#74c0fc'}
                /> */}
                    <ProjectBox
                        link1="https://github.com/BeginnerCoder21/TicTacToe.github.io"
                        link2="https://beginnercoder21.github.io/TicTacToe.github.io/"
                        title="Tic Tac Toe"
                        content="X O, you already know what it is. It is coded in HTML, CSS, and JavaScript. Begin the game by entering the user's name. When a user wins, you will be notified."
                        skill1="HTML"
                        skill2="JavaScript"
                        skill3="CSS"
                        color={'#63e6be'}
                    />
                    <ProjectBox
                        link1="https://github.com/BeginnerCoder21/Notes-App"
                        link2="https://github.com/BeginnerCoder21/Notes-App"
                        title="Notes App"
                        content="This Notes App was created with Flutter, Node.js as the backend, and MongoDB as the database. You can add, update, and delete any number of notes."
                        skill1="Node.js"
                        skill2="Flutter"
                        skill3="MongoDB"
                        color={'#e599f7'}
                    />
                </div>
                <br />
                <div className="pro-head">
                    UI/UX Projects <SiMaterialdesignicons />
                </div>
                <div className="prbox">
                    <ProjectBoxUI
                        link1="https://www.figma.com/file/PYdUtkmSJvm3T75cas9mcG/WeDesign-UIDesignFinal?node-id=0%3A1"
                        imgL={wellness}
                        title="Wellness Mandala"
                        content="This App UI is designed using Figma, created for the Hackathon 
                        organised by IIT BHU. My team got 3rd position in it. User can relax using this app.  "
                        skill1="Figma"
                    />
                    <ProjectBoxUI
                        link1="https://www.behance.net/gallery/121166559/E-Commerce-Website-UI"
                        imgL={Ecom}
                        title="E-Commerce Website UI"
                        content="This is an E-Commerce Website 
                        User Interface, which is designed
                        using AdobeXD. It contains various features like
                        About, Clothing types, add to cart and more. "
                        skill1="AdobeXD"
                    />
                    <ProjectBoxUI
                        link1="https://www.behance.net/gallery/123519353/Food-freshness-checking-app"
                        imgL={room}
                        title="Food Freshness Checking"
                        content="A Food Freshness Checking App designed using Figma,  users scan or click a pic of their food and will automatically check the freshness of the food items.
                        "
                        skill1="Figma"
                    />
                    <ProjectBoxUI
                        link1="https://www.behance.net/gallery/118193953/Weather-Forecasting-App-UI"
                        imgL={weather}
                        title="Weather Forescating App"
                        content="This Weather forecasting app is designed in
                        Adobe XD. User can select the country, city to get the deatils 
                        of the weather at that location."
                        skill1="AdobeXD"
                    />


                </div>
            </div>
            <div className="con-socials">
                <ContactBottom />
            </div>
            <br />
        </div>
    );
}

export default Work;