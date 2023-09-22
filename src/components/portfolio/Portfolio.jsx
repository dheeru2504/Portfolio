import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/IMG1.png";
import IMG2 from "../../assets/IMG2.png";
import IMG3 from "../../assets/IMG3.png";
import IMG4 from "../../assets/IMG4.png";
import IMG5 from "../../assets/IMG5.png";
import IMG7 from "../../assets/IMG7.png";

const data = [
  // {
  //   id :1,
  //   image:IMG1,
  //   title:'Drum Kit',
  //   github:'https://github.com/Dheeru-k/Drum-Kit',
  //   demo:'https://dheeru-k.github.io/Drum-Kit/'
  // },
  // {
  //   id :2,
  //    image:IMG2,
  //   title:'Dice Game',
  //   github:'https://github.com/Dheeru-k/Dice-Game',
  //   demo:'https://dheeru-k.github.io/Dice-Game/'
  // },
  {
    id: 1,
    image: IMG3,
    title: "Keep Notes",
    github: "https://github.com/Dheeru-k/Kepper-App",
    demo: "https://keepnotees.netlify.app/",
  },
  {
    id: 2,
    image: IMG4,
    title: "To Do List",
    github: "https://github.com/Dheeru-k/todoList",
    demo: "",
  },
  {
    id: 3,
    image: IMG5,
    title: "Share Your Secrets",
    github: "https://github.com/Dheeru-k/Secrets-1",
    demo: "",
  },
  {
    id: 4,
    image: IMG7,
    title: "E Commerce ",
    github: "https://github.com/Dheeru-k/E-commerce",
    demo: "https://front-dv26.onrender.com",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      {/* <h5>My Recent Work</h5> */}
      <h2>My Recent Work</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
