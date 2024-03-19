import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/plugins/captions.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const Sénescence = () => {
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
        styles={{ container: { backgroundColor: "rgba(255, 255, 255, 1)" } }}
        slideshow={{ ref: slideshowRef, autoplay: true, delay: 8000 }}
        slides={[
          { src: "/series/Sénescence/1.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", },
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