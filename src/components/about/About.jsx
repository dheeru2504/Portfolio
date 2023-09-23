import React from "react";
import "./About.css";
const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container">
        {/* <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about me" />
          </div>
        </div> */}

        <div className="about_content ">
          <h3 style={{ color: "White" }}>
            Computer Science Student at Indian Institute of Information
            Technology, Design and Manufacturing
          </h3>
          <p style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
            I&#39;m Dheeraj Kumar, final year B.Tech student, a passionate web developer with a keen eye for detail and a knack for crafting exceptional online experiences.
            With a solid background in both front-end and back-end development, I thrive on turning creative ideas into functional, user-friendly websites.

          </p>
          <div className="text-center">
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
