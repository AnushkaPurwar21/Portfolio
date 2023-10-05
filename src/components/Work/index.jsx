import React, { useState, useEffect } from 'react';
import './index.scss';
import ProjectBox from "../Projects/ProjectBox";
import firestore from '../../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import ContactBottom from "../ContactBottom";
import { SiMaterialdesignicons } from "react-icons/si";
import { BsLaptop } from "react-icons/bs";
import ProjectBoxUI from "../Projects/ProjectBoxUI";
const Work = () => {
    const [project, setProject] = useState([]);
    const [dataProjects, setDataProjects] = useState([]);
    const [designProjects, setDesignProjects] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const technicalProjectsCollectionRef = collection(firestore, 'technicalProjects');
                const technicalSnapshot = await getDocs(technicalProjectsCollectionRef);
                const technicalData = technicalSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                const designProjectsCollectionRef = collection(firestore, 'designProjects');
                const designSnapshot = await getDocs(designProjectsCollectionRef);
                const designProjectsData = designSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                const dataProjectsCollectionRef = collection(firestore, 'dataProjects');
                const dataSnapshot = await getDocs(dataProjectsCollectionRef);
                const dataProjectsData = dataSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                console.log('Fetched technical data:', technicalData);
                console.log('Fetched dataProjects data:', dataProjectsData);
                
                setProject(technicalData);
                setDataProjects(dataProjectsData);
                setDesignProjects(designProjectsData)
            } catch (error) {
                console.error('Error fetching projects data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="main">
            <div className="work">
                {"<h1>"} <span>My work</span> {"</h1>"}

            </div>
            <div className="head">
                <div className="pro-head">
                    Data Analytics Projects <BsLaptop />
                </div>
                <div className="prbox">
                    {dataProjects.map(ds => (
                        <ProjectBox
                            key={ds.id}
                            link1={ds.github}
                            link2={ds.deployment}
                            title={ds.title}
                            content={ds.description}
                            skills={ds.skills}
                            color={ds.color}
                        />
                    ))}
                </div>
                <br />
                <div className="pro-head">
                    Frontend Projects <BsLaptop />
                </div>
                <div className="prbox">
                    {project.map(pro => (
                        <ProjectBox
                            key={pro.id}
                            link1={pro.github}
                            link2={pro.deployment}
                            title={pro.title}
                            content={pro.description}
                            skills={pro.skills}
                            color={pro.color}
                        />
                    ))}
                </div>
                <br />
                <div className="pro-head">
                    UI/UX Projects <SiMaterialdesignicons />
                </div>
                <div className="prbox">
                {designProjects.map(de => (
                        <ProjectBoxUI
                            key={de.id}
                            link1={de.link}
                            title={de.title}
                            content={de.description}
                            skill1={de.skill1}
                            color={de.color}
                            imgL={de.image}
                        />
                    ))}
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