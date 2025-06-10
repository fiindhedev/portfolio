import React from "react";
import {Projects} from './projectsList'
import './styles/styles.scss'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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

class App extends React.Component{
    render() {
        return(
        <Project />
        )
    }
}

export default App;