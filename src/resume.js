import React from  'react'
import resume from './images/resume.jpg'
import Button from 'react-bootstrap/Button'

const DownloadButton = () => {
    return (
        <a href='/files/resume.pdf' download className='download-button'>
            <Button variant='dark'>Download Resume</Button>
        </a>
    )
}

const Resume = () =>{
    return(
        <div className='wrapper'>
    <main >
        <div className='resume'>
        <img alt='resume' src={resume}/>
        <DownloadButton />
        </div>
    </main>
        </div>

    )
}

export default Resume;