import React from "react";
import "./Portfolio.css";
import IMG3 from "../../assets/IMG3.png";
import IMG4 from "../../assets/IMG4.png";
import IMG5 from "../../assets/IMG5.png";
import IMG7 from "../../assets/IMG7.png";
import IMG8 from "../../assets/IMG8.png";
import IMG9 from "../../assets/IMG9.png";


const data = [

  {
    id: 1,
    image: IMG7,
    title: "E Commerce ",
    github: "https://github.com/Dheeru-k/E-commerce",
    demo: "https://front-dv26.onrender.com",
  },
  {
    id: 2,
    image: IMG9,
    title: "Chat App",
    github: "https://github.com/dheeru2504/Chat_App",
    demo: "https://chat-app-mu-navy.vercel.app/login",
  },
  {
    id: 3,
    image: IMG8,
    title: "Netflix-Clone",
    github: "https://github.com/dheeru2504/Netflix-clone",
    demo: "https://netflix-clone-e3vh3u72m-dheeru2504s-projects.vercel.app/auth",
  },
  {
    id: 4,
    image: IMG3,
    title: "Keep Notes",
    github: "https://github.com/Dheeru-k/Kepper-App",
    demo: "https://keepnotees.netlify.app/",
  },
  {
    id: 5,
    image: IMG4,
    title: "To Do List",
    github: "https://github.com/Dheeru-k/todoList",
    demo: "",
  },
  {
    id: 6,
    image: IMG5,
    title: "Share Your Secrets",
    github: "https://github.com/Dheeru-k/Secrets-1",
    demo: "",
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
                <img src={image} alt={title} width={320} height={152} />
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
