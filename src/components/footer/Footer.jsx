import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineLinkedin} from 'react-icons/ai'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Dheeraj</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://linkedin.com"><AiOutlineLinkedin/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Dheeraj Kumar. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default footer