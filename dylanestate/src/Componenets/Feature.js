import React from "react";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";
import "../styles/Feature.css"; 

const Feature = () => {
  return (
    <div>
      <div id="inside-div" className="feature-container">
        <form className="feature-form">
          <Feature1 />
          <hr className="feature-hr" />
          <Feature2 />
          <hr className="feature-hr" />
          {/* <Feature3 /> */}
        </form>
      </div>
    </div>
  );
};

export default Feature;
