import React, {useState} from "react";
import Header from './header'
import styles from './styles/styles.scss'
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import {Main} from "./home";
import {Home} from "./home";
import {SkillsSection} from "./home";
import {ProjectsSection} from "./home";
import {Resume} from './home'
import Contact from "./Contact";
import {MdDarkMode, MdOutlineLight} from "react-icons/md";
import Footer from './footer'
import './styles/styles.scss'

const App = () => {
    return(

        <Router>

            <Header />
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route element={<Home />} />
                <Route element={<SkillsSection />}/>
                <Route  element={<ProjectsSection />}/>
                <Route  element={<Resume />}/>
                <Route  element={<Footer />}/>

            </Routes>
            <Footer />

        </Router>


    )
}

export default App;