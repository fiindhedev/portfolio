import React from "react";
import {FaCircleCheck} from "react-icons/fa6";
import {FaCircleHalfStroke} from "react-icons/fa6";
import {FaCirclePlay} from "react-icons/fa6";
import './styles/styles.scss'
import {Carousel} from "react-bootstrap";
import frontend from './images/fend.webp'
import backend from './images/backend.jpg'
import databases from './images/databases.webp'
import {FaReact} from 'react-icons/fa'
import {FaPhp} from "react-icons/fa";
import {FaJava} from "react-icons/fa";
import {FaPython} from "react-icons/fa";
import {FaJs} from "react-icons/fa6";
import {PiFileSqlLight} from "react-icons/pi";
import {SiMongodb} from "react-icons/si";


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

        return(
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

        )

}

export default Skills;