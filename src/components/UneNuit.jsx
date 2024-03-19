import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const UneNuit = () => {
  const navigate = useNavigate();
  const slideshowRef = React.useRef(null);
  return (
    <>
    <Lightbox
        open={open}
        close={() => navigate(-1)}
        plugins={[Thumbnails, Slideshow]}
        slideshow={{ ref: slideshowRef, autoplay: true, delay: 8000 }}
        slides={[
          { src: "/series/Une nuit à Osaka/1.jpg"},      
          { src: "/series/Une nuit à Osaka/2.jpg" },
          { src: "/series/Une nuit à Osaka/3.jpg" },
          { src: "/series/Une nuit à Osaka/4.jpg" },
          { src: "/series/Une nuit à Osaka/5.jpg" },
          { src: "/series/Une nuit à Osaka/6.jpg" },
          { src: "/series/Une nuit à Osaka/7.jpg" },
          { src: "/series/Une nuit à Osaka/8.jpg" },
          { src: "/series/Une nuit à Osaka/9.jpg" },
          { src: "/series/Une nuit à Osaka/10.jpg" },
          { src: "/series/Une nuit à Osaka/11.jpg" },
          { src: "/series/Une nuit à Osaka/12.jpg" },
          { src: "/series/Une nuit à Osaka/13.jpg" },
          { src: "/series/Une nuit à Osaka/14.jpg" },
          { src: "/series/Une nuit à Osaka/15.jpg" },
          { src: "/series/Une nuit à Osaka/16.jpg" },
          { src: "/series/Une nuit à Osaka/17.jpg" },
          { src: "/series/Une nuit à Osaka/18.jpg" },
          { src: "/series/Une nuit à Osaka/19.jpg" },
        ]}
      />
    </>
  );
}

export default UneNuit;