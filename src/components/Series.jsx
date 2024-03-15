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
        <h2>Series</h2>
        <div className='gallerygrid'>
          <div className='row'>
            <div className='col'>
            <img src={VoyagePictural} alt="Voyage Pictural" />
            <Link to="/UneNuitàOsaka"><img src={UneNuitAOsaka} alt="Une nuit à Osaka" /></Link>
          
            </div>
            <div className='col'>
            <Link to="/Sénescence"><img src={Sénescence} alt="Sénescence" /></Link>
            <Link to="/DélibérezVous"><img src={DélibérezVous} alt="Délibérez-Vous" /></Link>
          </div>
          </div>
          </div>
      </div>
  )
}

export default Series