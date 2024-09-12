import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/plugins/captions.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const Emergent = () => {
  const navigate = useNavigate();
  const slideshowRef = React.useRef(null);
  const captionsRef = React.useRef(null);
  return (
    <>
    <Lightbox
        open={open}
        close={() => navigate(-1)}
        plugins={[Thumbnails, Slideshow, Captions]}
        captions={{ ref: captionsRef, showToggle : true }}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 1)" } }}
        slideshow={{ ref: slideshowRef, autoplay: true, delay: 8000 }}
        slides={[
          { src: "/series/Emergent/1.jpg"},
          { src: "/series/Emergent/4.jpg"},
          { src: "/series/Emergent/6.jpg"},
          { src: "/series/Emergent/8.jpg"},
          { src: "/series/Emergent/10.jpg"},
          { src: "/series/Emergent/11.jpg"},
          { src: "/series/Emergent/13.jpg"},
          { src: "/series/Emergent/14.jpg"},
          { src: "/series/Emergent/15.jpg"},
          { src: "/series/Emergent/18.jpg"},
          { src: "/series/Emergent/26.jpg"},
          { src: "/series/Emergent/30.jpg"},
          { src: "/series/Emergent/32.jpg"},
          { src: "/series/Emergent/34.jpg"},
          { src: "/series/Emergent/36.jpg"},
          { src: "/series/Emergent/38.jpg"},
          { src: "/series/Emergent/40.jpg"},
          { src: "/series/Emergent/43.jpg"},
          { src: "/series/Emergent/47.jpg"},
          { src: "/series/Emergent/50.jpg"},
          { src: "/series/Emergent/100.jpg"},
        ]}
      />
    </>
  );
}

export default Emergent