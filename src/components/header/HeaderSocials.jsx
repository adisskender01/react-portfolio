import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/adis-skender-586571249/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/adisskender01" target='_blank'><FaGithub /></a>
        <a href="https://www.facebook.com/skender.adis/" target='_blank'><FaFacebook /></a>
    </div>
  )
}

export default HeaderSocials