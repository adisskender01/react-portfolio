import React from 'react';
import "./footer.css";
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__to__top'>⬆ Back to the top ⬆</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/skender.adis/" target='_blank'><FaFacebookF /></a>
        <a href="https://www.linkedin.com/in/adis-skender-586571249/" target='_blank'><FaLinkedin /></a>
      </div>

    </footer>
  )
}

export default Footer