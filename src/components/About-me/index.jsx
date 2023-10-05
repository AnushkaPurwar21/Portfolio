import React, { useRef, useState,useEffect } from 'react';
import './index.scss';
import 'animate.css';
import firestore from '../../firebaseConfig';
import { doc, collection, query, where, onSnapshot, getDocs } from "firebase/firestore";
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
    const [experience, setExperience] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const experienceCollectionRef = collection(firestore, 'experience');
            const snapshot = await getDocs(experienceCollectionRef);

            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            console.log('Fetched data:', data);
            setExperience(data);
            setSelectedCompany(data[data.length - 1]);
            } catch (error) {
            console.error('Error fetching experience data:', error);
            }
        };
      
        fetchData();
      }, []);
      

    const handleCompanyClick = (exp) => {
        console.log('Clicked company:', exp.company);
        setSelectedCompany(exp);
    };
    
    return (
        <div className="about">
            <div className="about-head">
                {"<h1>"} <span>About Me</span> {"</h1>"}
            </div>

            <div className="content">
                <Card img={About1} heading="Data Analyst" 
                content="I like to code things from scratch and 
                like to bring my ideas to the browser world." />
                <Card img={About2} heading="Frontend Developer" 
                content="Animating my own original creations 
                makes me feel good. Making 3D characters and icons 
                is something I enjoy doing." />
                <Card img={UI} heading="UI/UX Designer" 
                content="Everything is designed. Few things are designed well ;)
                I make simple, clean design with some uniqueness." />
            </div>
            <div className="m-content">
                <div className="c-left">
                    <p>Experience</p>
                    <p>“In order to be irreplaceable one must always be different” </p>
                    <div className="exp-flex">
                        <div className="nav-exp-left">
                            <ul>
                            {experience
                                .slice()
                                .sort((a, b) => b.id - a.id)  // Sort in descending order based on id
                                .slice(0, 4)  // Get the top 4 items
                                .map(exp => (
                                <li key={exp.id} onClick={() => handleCompanyClick(exp)}>
                                    {exp.title}
                                </li>
                            ))}
                            </ul>
                        </div>
                        {selectedCompany && (
                            <Experience
                            expT={selectedCompany.title}
                            comp={selectedCompany.company}
                            duration={selectedCompany.duration}
                            lineO={selectedCompany.lineo}
                            lineT={selectedCompany.linet}
                            lineTh={selectedCompany.lineth}
                            />
                        )}
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
                    </div>
                           
                </div>
                
            </div>
            <ContactBottom/> 
        </div>
    );
}

export default AboutMe;