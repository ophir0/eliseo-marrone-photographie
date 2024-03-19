import React from "react";
import Accordion from "./Accordion";

const Infos = () => {
  return(
    <main>
    <h1>Infos</h1>
      <div className="accordion">
      <Accordion
          title="BIOGRAPHIE"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <Accordion
          title="EXPO"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <Accordion
          title="CONTACT"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <Accordion
          title="MENTION LEGAL"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
      </div>
      
    </main>
  )
};

export default Infos;