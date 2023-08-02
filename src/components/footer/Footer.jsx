import React from 'react'
import './footer.css'
import{FaFacebookF} from 'react-icons/fa'
import{FiInstagram} from 'react-icons/fi'
import{FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ANU</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__social'>
        <a href="https://m.facebook.com/anuradha.basnayake.5895" target='_blank'><FaFacebookF/></a>
        <a href="https://www.instagram.com/_.uttharaaa._/" target='_blank'><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/anuradha-basnayake-117881212" target='_blank'><FaLinkedinIn/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ANU PORTFOLIO. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer