import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import VoyagePictural from '/series/Thumbnails/Voyage Pictural.jpg';
import UneNuitAOsaka from '/series/Thumbnails/Une nuit à Osaka.jpg';
import Sénescence from '/series/Thumbnails/Sénescence.jpg';
import DélibérezVous from '/series/Thumbnails/Délibérez-Vous.jpg';


const Series = () => {
  return (
      <div>    
        <div className="series-container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            <div className="col mt-3">
              <Link to="/Sénescence"><img src={Sénescence} alt="Sénescence" /></Link>
              Sénescence
            </div>
            <div className="col mt-3">
              <Link to="/UneNuitàOsaka"><img src={UneNuitAOsaka} alt="Une nuit à Osaka" /></Link>
              Une Nuit à Osaka
            </div>
            </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            <div className="col mt-3">
              <Link to="/VoyagePictural"><img src={VoyagePictural} alt="Voyage Pictural" /></Link>
              Voyage Pictural
            </div>
            <div className="col mt-3">
              <Link to="/DélibérezVous"><img src={DélibérezVous} alt="Délibérez-Vous" /></Link>
            Délibérez-Vous
            </div>
        </div>
        </div>
        </div>             
  )
}

export default Series