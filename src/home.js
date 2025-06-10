import React, {useState} from "react";
import Header from "./header";
import './styles/styles.scss'
import {Router} from "react-router-dom";
import photo from './images/meAI.jpg'
import resume from './images/resume.png'

import {FaGithub, FaLinkedin, FaPhone} from "react-icons/fa";
import {FaPhp} from "react-icons/fa";
import {FaJava} from "react-icons/fa";
import {FaPython} from "react-icons/fa";
import {TbWorldWww} from "react-icons/tb";
import {CiLink} from "react-icons/ci";
import projects from "./projects";
import Accordion from 'react-bootstrap/Accordion'
import {MdOutlineLight} from "react-icons/md";
import {MdDarkMode} from "react-icons/md";
import {PiFileSqlLight} from "react-icons/pi";

import {FaCircleCheck} from "react-icons/fa6";
import {FaCircleHalfStroke} from "react-icons/fa6";
import {FaCirclePlay} from "react-icons/fa6";
import './styles/styles.scss'
import {Carousel} from "react-bootstrap";
import frontend from './images/fend.webp'
import backend from './images/backend.jpg'
import databases from './images/databases.webp'
import {FaReact} from 'react-icons/fa'
import {Projects} from './projectsList'
import './styles/styles.scss'
import Card from 'react-bootstrap/Card';

import {FaJs} from "react-icons/fa6";

import {SiMongodb} from "react-icons/si";
import Button from "react-bootstrap/Button";

import {useRevealOnScroll} from "./revealOnScroll";

const AProject = ({icon, title, pname, source}) => {
    return(
        <>
            <p>{title}</p>
            {icon}
            <h3>{pname}</h3>
            <a target='_blank' href={source}><CiLink size={30} /></a>
        </>
    )
}



const Home = () => {
    const projects = [

        {
            title: 'My Portfolio',
            source: 'https://hamseportfolio.com/',
            icon: <TbWorldWww size={50} />,
        },

        {
            title: 'University Fee System',
            source: 'https://github.com/fiindhedev/PHP-uni-fee-system',
            icon: <FaPhp size={50} />,
        },

        {
            title: 'Inventory System'    ,
            source: 'https://github.com/fiindhedev/Java-Inventory-System' ,
            icon: <FaJava/>,
        },

        {
            title: 'Voting System',
            source: 'https://github.com/fiindhedev/voting/tree/main/Election',
            icon: <FaPython size={50}/>,
        },
        {
            title: 'Hotel Management System',
            source: 'https://github.com/fiindhedev/Java-hotel-System',
            icon: <FaJava size={50} />,
        }
    ];

return(
    <div className='wrapper'>
    <main id='home'>
        <div className='top'>
        <div className='intro' >

            <h2>Full Stack Web Developer and Software Engineer</h2>
            <p>
                My name is <p className='my-name'> Hamse Yusuf </p> I am a full-stack developer with great expertise in
                both frontend and backend technologies. I have built websites with HTML/CSS,
                bootstrap, JavaScript, ReactJs, NodeJs, Flask and PHP.
                <br /> <br />
                I have also built highly efficient softwares with Java and Python.
                For years , I have worked with different databases including SQL (MySQL) and MongoDB.
                I am Microsoft Azure AI-900 certified.
            </p>

            <div className='contact'>
                <h3>Contact me: </h3>
                <div> <a target='_blank' href='https://www.linkedin.com/in/hamseyusuf/'><FaLinkedin size={30}/> </a>
                </div>
                <div> <a target='_blank' href='https://github.com/fiindhedev'><FaGithub size={30} /> </a>
                </div>
                <div> <a target='_blank' href='tel:+17803468025'><FaPhone size={30} /> </a>
                </div>
            </div>
        </div>

        <div className='photo'>
            <img src={photo} alt='me'/>
        </div>
        </div>

        <br />
        <hr />



    </main>
    </div>

)
}


// Skills Section
    const skills = [

        {
            icon: <FaReact size={30}/>,
            skill: 'HTML/CSS',
            years: '3',
        },

        {
            icon: <FaJs size={30} />,
            skill: 'Javascript',
            years: '3',
        },

        {
            icon: <FaReact size={30}/>,
            skill: 'React',
            years: '3',
        },
        {
            icon: <FaPhp size={30}/>,
            skill: 'PhP',
            years: '3',
        },
        {
            icon: <FaJava size={30}/>,
            skill: 'Java',
            years: '5',
        },
        {
            icon: <FaPython size={30}/>,
            skill: 'Python',
            years: '2',
        },
        {
            icon: <PiFileSqlLight size={30} />,
            skill: 'SQL/MySQL',
            years: '5',
        },
        {
            icon: <SiMongodb size={30} />,
            skill: 'MongoDB',
            years: '1',
        },

    ]

    function CarouselFadeExample() {
        return (
            <Carousel fade>
                <Carousel.Item>
                    <img src={frontend} alt='frontend' />

                </Carousel.Item>
                <Carousel.Item>
                    <img src={backend} alt='backend' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={databases} alt='backend' />
                </Carousel.Item>
            </Carousel>
        );
    }

    const Skills = () => {
        const [ref, isVisible] = useRevealOnScroll()

        return(
            <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
            <div className='wrapper'>
                <main>

                    <div className='education'>
                        <h1>Education</h1>

                        <div className='ed1'><FaCircleCheck size={50} color={'green'}/>
                            <h3>High School | Hawd Secondary School, Buhodle Somalia | 2020</h3>
                        </div>
                        <div className='ed2'>   <FaCircleHalfStroke  size={50} color={'black'}/>
                            <h3> Software Engineering | Istanbul Sabahattin Zaim University | 2021-2024</h3>
                        </div>
                        <div className='ed3'>
                            <FaCirclePlay size={50} color={'blue'} />
                            <h3> Computing Science | University of Alberta, Edmonton AB | 2025-2028 (Expected) </h3>
                        </div>
                    </div>

                    <hr />

                    <div className='middle'>

                        <CarouselFadeExample />

                    </div>

                    <hr />

                    <div className='skills'>
                        {skills.map((skill) => (
                            <div className='skill'>
                                {skill.icon}
                                <h3>{skill.skill}</h3>
                                <p>Years of Experience: {skill.years} </p>
                            </div>
                        ))}
                    </div>

                </main>
            </div>
            </div>
        )

    }

    const SkillsSection = () => {
    return(
    <main id='skills'>
        <Skills />
        </main>
    )
    }


    //Projects Section




const Project =() => {
    return (
        <div className='wrapper'>
            <main>
                <div className='all-projects'>
                    {Projects.map((project, index) => (
                        <div key={index} className='project-cards'>
                            <Card>
                                <Card.Body>
                                    <div className='project-title'>
                                        <Card.Title style={{fontSize:'35px'}}>{project.name}</Card.Title>
                                    </div>
                                    <Card.Text>
                                        {project.description}
                                    </Card.Text>
                                    <h2>Technologies: {project.languages} </h2>
                                    <h3> Link: <a target='_blank' href={project.link}>{project.link}</a></h3>
                                </Card.Body>
                            </Card>

                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}





    const ProjectsSection  = () => {

        const [ref, isVisible] = useRevealOnScroll()

        return(
            <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>

            <div id='projects'>
            <Project />
            </div>
            </div>
        )
    }


    //resume

const DownloadButton = () => {
    return (
        <a href='/files/Hamse Yusuf- Official Resume.pdf' download className='download-button'>
            <Button variant='dark'>Download Resume</Button>
        </a>
    )
}

const Resume = () =>{

    const [ref, isVisible] = useRevealOnScroll()

    return(
        <div ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>

        <main id='resume' >
                <div className='resume'>
                    <img alt='resume' src={resume}/>
                    <DownloadButton />
                </div>
            </main>
    </div>


    )
}



const Main = () => {
    return(
        <div>
        <Home />
        <SkillsSection />
            <ProjectsSection />
        <Resume />
        </div>
    )
    }
export  {Home, Main,  SkillsSection, ProjectsSection, Resume};

