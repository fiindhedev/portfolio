import React from 'react'
import {FaLinkedin} from "react-icons/fa";
import {FaPhone} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import './styles/styles.scss'


const Footer = () => {
    return(
        <div className='wrapper'>
        <footer id='contact'>
            <div className='sm'>
               <div> <a target='_blank' href='https://www.linkedin.com/in/hamseyusuf/'><FaLinkedin size={30} color={'white'}/> </a>
               </div>
            <div> <a target='_blank' href='https://github.com/fiindhedev'><FaGithub size={30} color={'white'} /> </a>
            </div>
              <div> <a target='_blank' href='tel:+17803468025'><FaPhone size={30} color={'white'}/> </a>
              </div>
        </div>

            <div className='copyright'>
                <p>&copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
        </div>
    )
}

export default Footer;