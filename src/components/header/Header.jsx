import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/Mee-1.png";
import Header_socials from "./Header_socials";

const header = () => {
  return (
    <header>
      <div className="container container_header">
        <h5>Hello I'm</h5>
        <h1>Dheeraj Kumar</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <Header_socials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        {/* <a href="#contact" className="scroll_down">
          Scroll Down
        </a> */}
      </div>
    </header>
  );
};

export default header;
