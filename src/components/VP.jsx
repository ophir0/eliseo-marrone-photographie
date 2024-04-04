import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const VP = () => {
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
          { src: "/series/Voyage Pictural/2.jpg",
          description: "Cette série explore la photographie abstraite capturée au gré du hasard. Elles sont imprimées sur du papier texturé \"Fine Art\". Le rendu final n'est pas éloigné de la peinture!",  },
          { src: "/series/Voyage Pictural/3.jpg" },
          { src: "/series/Voyage Pictural/4.jpg" },
          { src: "/series/Voyage Pictural/8.jpg" },
          { src: "/series/Voyage Pictural/20.jpg" },
          { src: "/series/Voyage Pictural/27.jpg" },
          { src: "/series/Voyage Pictural/30.jpg" },
          { src: "/series/Voyage Pictural/38.jpg" },
          { src: "/series/Voyage Pictural/44.jpg" },
          { src: "/series/Voyage Pictural/47.jpg" },
          { src: "/series/Voyage Pictural/67.jpg" },
          { src: "/series/Voyage Pictural/72.jpg" },
          { src: "/series/Voyage Pictural/83.jpg" },
          { src: "/series/Voyage Pictural/84.jpg" },
          { src: "/series/Voyage Pictural/92.jpg" },

        ]}
      />
    </>
  );
}

export default VP;