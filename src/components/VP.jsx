import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const VP = () => {
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
          { src: "/series/Voyage Pictural/2web.jpg" },
          { src: "/series/Voyage Pictural/4web.jpg" },
          { src: "/series/Voyage Pictural/8web.jpg" },
          { src: "/series/Voyage Pictural/10web.jpg" },
          { src: "/series/Voyage Pictural/20web.jpg" },
          { src: "/series/Voyage Pictural/30web.jpg" },
          { src: "/series/Voyage Pictural/83web.jpg" },
          { src: "/series/Voyage Pictural/92web.jpg" },

        ]}
      />
    </>
  );
}

export default VP;