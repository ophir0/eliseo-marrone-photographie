import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: "/public/series/Délibérez-Vous/1.jpg",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: [
              { src: "/public/series/Délibérez-Vous/1.jpg", width: 320, height: 213 },
              { src: "/public/series/Délibérez-Vous/1.jpg", width: 640, height: 427 },
              { src: "/public/series/Délibérez-Vous/1.jpg", width: 1200, height: 800 },
              { src: "/public/series/Délibérez-Vous/1.jpg", width: 2048, height: 1365 },
              { src: "/public/series/Délibérez-Vous/1.jpg", width: 3840, height: 2560 },
            ],
          },
          // ...
        ]}
      />
    </>
  );
}
    