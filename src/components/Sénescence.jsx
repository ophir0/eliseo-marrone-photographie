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
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 1)" } }}
        slideshow={{ ref: slideshowRef, autoplay: true, delay: 8000 }}
        slides={[
          { src: "/series/Sénescence/01-4.jpg"},
          { src: "/series/Sénescence/02-4.jpg" },
          { src: "/series/Sénescence/03-4.jpg" },
          { src: "/series/Sénescence/04-4.jpg" },
          { src: "/series/Sénescence/05-4.jpg" },
          { src: "/series/Sénescence/06-4.jpg" },
          { src: "/series/Sénescence/07-4.jpg" },
          { src: "/series/Sénescence/08-4.jpg" },
          { src: "/series/Sénescence/09-4.jpg" },
          { src: "/series/Sénescence/010-4.jpg" },
          { src: "/series/Sénescence/011-4.jpg" },
          { src: "/series/Sénescence/012-4.jpg" },
          { src: "/series/Sénescence/013-4.jpg" },
          { src: "/series/Sénescence/015-4.jpg" },
          { src: "/series/Sénescence/016-4.jpg" },
          { src: "/series/Sénescence/017-4.jpg" },
          { src: "/series/Sénescence/018-4.jpg" },
          { src: "/series/Sénescence/019-4.jpg" },
        ]}
      />
    </>
  );
}

export default Sénescence