import React from 'react';
import "./about.css";
import ME from "../../assets/Me1.jpg";
import { FaAward } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>3 Months of internship experience that provided valuable insights into frontend development and teamwork</small>
            </article>

            <article className="about__card">
              <FaReact className="about__icon"/>
              <h5>Frontend</h5>
              <small>Hands-on experience with HTML, CSS, JavaScript, and frameworks like React.</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>My GitHub portfolio highlights a range of completed projects, reflecting my growth as a developer.</small>
            </article>
          </div>

          <p>
            Greetings, I am graduated Software engineer that utilizes a diverse range of technologies including HTML, CSS, JavaScript, Shopware 6 and React.js
            to craft stunning and effective websites for my clients.
            I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About