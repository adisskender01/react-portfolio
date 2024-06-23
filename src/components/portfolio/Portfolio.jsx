import React from "react";
import "./portfolio.css";
import education from "../../assets/education-img.jpg";
import foodMenu from "../../assets/food-menu.jpg";
import chatApp from "../../assets/chat-app.jpg";


const data = [
  {
    id: 1,
    image: education,
    title: "Responsive Multipage Education Website",
    github: "https://github.com/adisskender01/responsive-multipage-education-website",
    demo: "https://adisskender01.github.io/responsive-multipage-education-website/"
  },
  {
    id: 2,
    image: foodMenu,
    title: "Responsive Fast Food Website",
    github: "https://github.com/adisskender01/responsive-fast-food-website",
    demo: "https://adisskender01.github.io/responsive-fast-food-website/"
  },
  {
    id: 3,
    image: chatApp,
    title: "React Chat App",
    github: "https://github.com/adisskender01/react-chat-app",
    demo: "https://adisskender01.github.io/react-chat-app/"
  }
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio