import React from "react";
import "./About.css";
import ME from "../../assets/Me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
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
            I am a third year B.Tech student, Interested in web delopment and
            slightly inclined towards ethical hacking. I like travelling and
            exploring new places, listening music. I am a passionate Driver too.
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
