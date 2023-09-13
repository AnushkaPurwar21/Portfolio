import React, { useRef, useState } from 'react';
import './index.scss';
import 'animate.css';
import Card from "../Card";
import Avocado from '../../assets/images/Avocadro.svg';
import Experience from './Experience';
import { SiCplusplus, SiPython, SiJava, SiJavascript, SiAdobeillustrator } from "react-icons/si";
import { SiReact, SiHtml5, SiCss3, SiFlutter, SiAdobexd } from "react-icons/si";
import { SiNodedotjs, SiMongodb, SiHeroku, SiFigma, SiBlender, SiPostman, SiGithub, SiGit } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import SkillTab from './SkillTab/index';
import About1 from '../../assets/images/About1.svg';
import About2 from '../../assets/images/Animator.svg';
import UI from '../../assets/images/UI.svg';
import ContactBottom from '../ContactBottom';

const AboutMe = () => {
    const [expTitle, setExpTitle] = useState('Executive Mem.');
    const [company, setCompany] = useState('Placement Cell');
    const [duration, setDuration] = useState('August 2021 - April 2022');
    const [lineO, setLineO] = useState('Responsible for contacting and inviting companies for organizing campus placement and internship drives ');
    const [lineT, setLineT] = useState('Created informative content and posts for social media handles (LinkedIn and Instagram) of the cell');
    const [lineTh, setLineTh] = useState('Worked in a team');
    const [link, setLink] = useState('');


    const exp1 = () => {
        console.log("Inside exp1");
        setExpTitle('Executive Mem.');
        setCompany('Placement Cell');
        setDuration('August 2021 - April 2022');
        setLineO('Responsible for contacting and inviting companies for organizing campus placement and internship drives ');
        setLineT("Created informative content and posts for social media handles (LinkedIn and Instagram) of the cell");
        setLineTh("Worked in a team");
        setLink("");
    }
    const exp2 = () => {
        console.log("Inside exp2");
        setExpTitle('Peer Mentor');
        setCompany('MSCW');
        setDuration('February 2022 and August 2021');
        setLineO("Mentored students on two different topics: Python programming and Animation using Blender 3D.");
        setLineT("Both programmes were 30 hours long, beginner-friendly course");
        setLineTh("Taught the mentees with hands-on sessions including projects and assignments.");
        setLink("");
    }
    const exp3 = () => {
        console.log("Inside exp3");
        setExpTitle('Web Development intern');
        setCompany('HSG');
        setDuration('July 2021 - September 2021');
        setLineO("Worked in a team and analyzed their website made using WIX and assessed them how it can be more better.");
        setLineT("Designed the UI's for their website so that it become more user friendly");
        setLineTh("Guided them how can we increase their reach and worked on increasing their site Backlinks and Domain Authority");
        setLink("");
    }
    const exp4 = () => {
        console.log("Inside exp3");
        setExpTitle('Assoc. Graphic designer');
        setCompany('LQF');
        setDuration('May 2021 - July 2021');
        setLineO("Designed posters, newsletters, Presentations");
        setLineT("Illustrated their toolkit.");
        setLineTh("Designed the posts for their social media handles ");
        setLink("");
    }
    const exp5 = () => {
        console.log("Inside exp3");
        setExpTitle('LexQuest Foundation');
        setCompany('Efg');
        setDuration('May 2022 - Jun 2022');
        setLineO("Heldjfkfk  mff k nkf  f fk fkf lo");
        setLineT("jjc nnf n kfn kn  ,nfknfkfkf mfsdjsvd");
        setLineTh("dvdvdvj f nf nfknfknfknfkfk");
        setLink("");
    }
    return (
        <div className="about">
            <div className="about-head">
                {"<h1>"} <span>About Me</span> {"</h1>"}
            </div>

            <div className="content">
                <Card img={About1} heading="Coder" 
                content="I like to code things from scratch and 
                like to bring my ideas to the browser world." />
                <Card img={UI} heading="UI/UX Designer" 
                content="Everything is designed. Few things are designed well ;)
                I make simple, clean design with some uniqueness." />
                <Card img={About2} heading="Animator" 
                content="Animating my own original creations 
                makes me feel good. Making 3D characters and icons 
                is something I enjoy doing." />
            </div>
            <div className="m-content">
                <div className="c-left">
                    <p>Experience</p>
                    <p>“In order to be irreplaceable one must always be different” </p>
                    <div className="exp-flex">
                        <div className="nav-exp-left">
                            <ul>
                                <li onClick={exp1}>PRAYAS- Placement Cell of MSCW </li>
                                <li onClick={exp2}>MSCW</li>
                                <li onClick={exp3}>Hello Study Gloabl </li>
                                <li onClick={exp4}>LexQuest Foundation</li>
                            </ul>
                        </div>
                        <Experience expT={expTitle}
                            comp={company}
                            duration={duration}
                            lineO={lineO}
                            lineT={lineT}
                            lineTh={lineTh}
                            link={link}
                        />
                        {/* <img src="" alt="" /> */}
                    </div>
                </div>
                <div className="c-right">
                    <p>Skills</p>
                    <p>Here are some of the languages and tools that I use.</p>
                    <div className="image">
                    </div>

                    <div className="row animate__slideInUp">
                        <SkillTab icon={<SiCplusplus />} title={"C++"} />
                        <SkillTab icon={<SiPython />} title={"Python"} />
                        <SkillTab icon={<SiJava />} title={"Java"} />
                        <SkillTab icon={<SiJavascript />} title={"JavaScript"} />
                        <SkillTab icon={<SiHtml5 />} title={"HTML"} />
                        <SkillTab icon={<SiCss3 />} title={"CSS"} />
                        <SkillTab icon={<SiReact />} title={"React"} />
                        <SkillTab icon={<SiFlutter />} title={"Flutter"} />
                        <SkillTab icon={<FaSass />} title={"Sass"} />
                        <SkillTab icon={<SiNodedotjs />} title={"NodeJS"} />
                        <SkillTab icon={<GrMysql />} title={"MySQL"} />
                        <SkillTab icon={<SiMongodb />} title={"MongoDB"} />
                        <SkillTab icon={<SiPostman />} title={"Postman"} />
                        <SkillTab icon={<SiGithub />} title={"Github"} />
                        <SkillTab icon={<SiHeroku />} title={"Heroku"} />
                        <SkillTab icon={<SiAdobexd />} title={"Adobe XD"} />
                        <SkillTab icon={<SiAdobeillustrator />} title={"Illustrator"} />
                        <SkillTab icon={<SiFigma />} title={"Figma"} />
                        <SkillTab icon={<SiBlender />} title={"Blender"} />

                        <br /><br />
                        {/* <ul className="back">
                                {
                                    backSkills.map((oldSkills, index) => {
                                        return (
                                            <li key={index}>{oldSkills}</li>
                                        );
                                    })
                                }

                            </ul>
                            <ul className="tech">
                                {
                                    techSkills.map((oldTechSkills, index) => {
                                        return (
                                            <li key={index}>{oldTechSkills}</li>
                                        );
                                    })
                                }
                            </ul>

                            <ul className="front">
                                {
                                    frontSkills.map((oldFrontSkills, index) => {
                                        return (
                                            <li key={index}>{oldFrontSkills}</li>
                                        );
                                    })
                                }
                            </ul> */}
                    </div>
                           
                </div>
                
            </div>
            <ContactBottom/> 
        </div>
    );
}

export default AboutMe;