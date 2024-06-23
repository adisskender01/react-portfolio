import React, { useRef } from 'react';
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g0vefca', 'template_ovdedkf', form.current, 'UeBHqcFdiG525EcTg')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>adis.skender2018@size.ba</h5>
            <a href="mailto:adis.skender2018@size.ba" target='_blank' rel='noreferrer'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Adis Skender</h5>
            <a href="https://m.me/skender.adis" target='_blank' rel='noreferrer'>Send a message</a>
          </article>

          <article className="contact__option">
            <FaLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Adis Skender</h5>
            <a href="https://www.linkedin.com/in/adis-skender-586571249/" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
