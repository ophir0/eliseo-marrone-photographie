import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const DV = () => {
  const navigate = useNavigate();
  const slideshowRef = React.useRef(null);
  return (
    <>
    <Lightbox
        open={open}
        close={() => navigate(-1)}
        plugins={[Thumbnails, Slideshow]}
        styles={{ container: { backgroundColor: "rgba(255, 255, 255, 1)" } }}
        slideshow={{ ref: slideshowRef, autoplay: true, delay: 8000 }}
        slides={[
          { src: "/series/Délibérez-Vous/1.jpg" },
          { src: "/series/Délibérez-Vous/2.jpg" },
          { src: "/series/Délibérez-Vous/3.jpg" },
          { src: "/series/Délibérez-Vous/4.jpg" },
          { src: "/series/Délibérez-Vous/5.jpg" },
          { src: "/series/Délibérez-Vous/6.jpg" },
          { src: "/series/Délibérez-Vous/7.jpg" },
          { src: "/series/Délibérez-Vous/8.jpg" },
          { src: "/series/Délibérez-Vous/9.jpg" },
          { src: "/series/Délibérez-Vous/10.jpg" },
          { src: "/series/Délibérez-Vous/11.jpg" },
          { src: "/series/Délibérez-Vous/12.jpg" },
          { src: "/series/Délibérez-Vous/13.jpg" },
          { src: "/series/Délibérez-Vous/14.jpg" },
          { src: "/series/Délibérez-Vous/15.jpg" },
          { src: "/series/Délibérez-Vous/16.jpg" },
          { src: "/series/Délibérez-Vous/17.jpg" },
          { src: "/series/Délibérez-Vous/18.jpg" },
          { src: "/series/Délibérez-Vous/19.jpg" },
          { src: "/series/Délibérez-Vous/20.jpg" },
          { src: "/series/Délibérez-Vous/21.jpg" },
          { src: "/series/Délibérez-Vous/22.jpg" },
          { src: "/series/Délibérez-Vous/23.jpg" },
          { src: "/series/Délibérez-Vous/24.jpg" },
          { src: "/series/Délibérez-Vous/25.jpg" },
          { src: "/series/Délibérez-Vous/26.jpg" },
          { src: "/series/Délibérez-Vous/27.jpg" },
          { src: "/series/Délibérez-Vous/28.jpg" },
          { src: "/series/Délibérez-Vous/29.jpg" },
          { src: "/series/Délibérez-Vous/30.jpg" },
          { src: "/series/Délibérez-Vous/31.jpg" },
          { src: "/series/Délibérez-Vous/32.jpg" },
          { src: "/series/Délibérez-Vous/33.jpg" },
        ]}
      />
    </>
  );
}

export default DV;