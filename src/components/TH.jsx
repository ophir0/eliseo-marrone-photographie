import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const TH = () => {
  const navigate = useNavigate();
  const slideshowRef = React.useRef(null);
  return (
    <>
    <Lightbox
        open={open}
        close={() => navigate(-1)}
        plugins={[Thumbnails, Slideshow]}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 1)" } }}
        slideshow={{ ref: slideshowRef, autoplay: true, delay: 8000 }}
        slides={[
          { src: "/series/Tarmac Hubolt/1.png" },
          { src: "/series/Tarmac Hubolt/2.jpg" },
          { src: "/series/Tarmac Hubolt/3.jpg" },
          { src: "/series/Tarmac Hubolt/4.jpg" },
          { src: "/series/Tarmac Hubolt/6.jpg" },
          { src: "/series/Tarmac Hubolt/7.jpg" },
          { src: "/series/Tarmac Hubolt/8.jpg" },
          { src: "/series/Tarmac Hubolt/9.jpg" },
          { src: "/series/Tarmac Hubolt/10.jpg" },
          { src: "/series/Tarmac Hubolt/11.jpg" },
          { src: "/series/Tarmac Hubolt/12.jpg" },
        ]}
      />
    </>
  );
}

export default TH;