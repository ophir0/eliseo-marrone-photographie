import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { Link, Route, Routes } from "react-router-dom";

const Sénescence = () => {
    
  return (
    <>
    <Lightbox
        open={open}
        close={() => <Link to="/Series" />}
        plugins={[Thumbnails]}
        slides={[
          { src: "/series/Sénescence/1.jpg" },
          { src: "/series/Sénescence/01.jpg" },
          { src: "/series/Sénescence/2.jpg" },
          { src: "/series/Sénescence/3.jpg" },
          { src: "/series/Sénescence/4.jpg" },
          { src: "/series/Sénescence/5.jpg" },
          { src: "/series/Sénescence/6.jpg" },
        ]}
      />
    </>
  );
}

export default Sénescence