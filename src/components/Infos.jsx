import React from "react";
import Accordion from "./Accordion";

const Infos = () => {
  return(
    <main>
      <div className="accordion">
      <Accordion
          title="BIOGRAPHIE"
          text=""
        />
        <Accordion
          title="EXPO"
          text=""
        />
        <Accordion
          title="MENTION LEGAL"
          text="Ce site et son contenu sont protégés par les lois sur la propriété intellectuelle. Toute reproduction est interdite ."
        />
      </div>
      
    </main>
  )
};

export default Infos;