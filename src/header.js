import React from 'react'
import './styles/styles.scss'
import {Navbar, Container, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ChangeColor from "./ChangeColor";
import {useLocation, useNavigate} from "react-router-dom";


const MyNavbar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleScroll = (id) => {
        if (location.pathname !== '/') {
            navigate(`/#${id}`);
        } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (

        <div>
            <Navbar className='my-navbar' expand="lg" bg="dark" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand href="/">Hamse Yusuf</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse  id='basic-navbar-nav'>

                        <Nav className='ms-auto'>
                            <Nav.Link onClick={() => handleScroll('home')}>Home</Nav.Link>
                            <Nav.Link onClick={() => handleScroll('skills')}>Skills</Nav.Link>
                            <Nav.Link onClick={() => handleScroll('projects')}>Projects</Nav.Link>
                            <Nav.Link onClick={() => handleScroll('resume')}>Resume</Nav.Link>
                            <Nav.Link onClick={() => handleScroll('contact')}>Contact Me</Nav.Link>
                            <ChangeColor />

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>

    )
}

const Header = () => {
    return(
        <header>
            <MyNavbar />
        </header>
    )
}


export default Header;