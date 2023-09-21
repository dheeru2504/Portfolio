import React from "react";
import CV from "../../assets/Cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a className="btn" href={CV} download>
        CV
      </a>{" "}
      {/*download tag to download the cv */}
      <a className="btn btn-primary" href="#contact">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
