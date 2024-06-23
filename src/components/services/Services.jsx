import React from 'react';
import "./services.css";
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating websites that look great and work seamlessly on all devices, from desktops to smartphones.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Building fast and dynamic Single Page Applications using modern frameworks like React, providing a smooth user experience</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimizing website performance for faster load times and better user experience.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Enhancing user engagement with custom animations and interactive elements using CSS and JavaScript</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Using Git for version control to manage code efficiently and collaborate with other developers.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services