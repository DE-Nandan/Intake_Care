import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className='bg-slate-800'>
      <a href="#" className='footer__logo'>IntakeCare</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Few Words</a></li>
        <li><a href="#contact">Contact</a></li>  
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/people/Nandan-Kumar/100059024048843/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/de_nandan_/"><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/nandan-kumar-731527208"><AiFillLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;IntakeCare</small>
      </div>
    </footer>
  )
}

export default Footer