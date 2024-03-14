import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Sénescence = () => {
    
  return (
    <>
    <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: "/public/series/Sénescence/1.jpg" },
          { src: "/public/series/Sénescence/01.jpg" },
          { src: "/public/series/Sénescence/2.jpg" },
          { src: "/public/series/Sénescence/3.jpg" },
          { src: "/public/series/Sénescence/4.jpg" },
          { src: "/public/series/Sénescence/5.jpg" },
          { src: "/public/series/Sénescence/6.jpg" },
        ]}
      />
    </>
  );
}

export default Sénescence