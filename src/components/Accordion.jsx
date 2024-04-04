import { React, useState } from 'react'
import { useSpring, animated } from "react-spring";

function Accordion(props) {
    const [open, setOpen] = useState(false);
  //toggle accordion function
  let toggleHandler = (e) => {
    //switch state
    setOpen(!open);
  };

   //conditional styling
   const styles = {
    //if open is true, show content
    accordionTitle: {
      color: open ? "#000000" : "#000000"
    }
  };
  //open animation with react spring

  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "25px" },
    to: { opacity: "1", maxHeight: open ? "150x" : "25px" },
    config: { duration: "300" }
  });


  return (
    <animated.div className="accordion__item" style={openAnimation}>
    <div className="accordion__header" onClick={toggleHandler}>
      <h2 style={styles.accordionTitle}>{props.title}</h2>
   
    </div>
    <p className="accordion__content">{props.text}</p>
  </animated.div>
  )
}

export default Accordion