import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/Mee-1.png";
import Header_socials from "./Header_socials";
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Dheeraj Kumar', 'Web Developer', 'UI/UX Designer'];

const Header = () => {

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <header>
      <div className="container container_header">
        <h5>Hello I'm</h5>
        {/* <h1>Dheeraj Kumar</h1> */}
        <TextTransition className="moving-text" springConfig={presets.wobbly} direction="down">{TEXTS[index % TEXTS.length]}</TextTransition>
        <h5 className="text-light">Web Developer</h5>
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

export default Header;
