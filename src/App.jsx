import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import Accueil from "./components/Accueil";
import Infos from "./components/Infos";
import Series from "./components/Series";
import Sénescence from "./components/Sénescence";
import UneNuit from "./components/UneNuit";
import DV from "./components/DV"; 
import VP from "./components/VP"; 

const App = () => {
  
    return (
      <div className="container">
        <div className="row">
          <div className='col-sm-3'>
          <div className="logo">
              <h2>Eliséo Marrone</h2>
              <h6>photographie</h6> 
            </div>
            </div>
          </div>
        <div className="row">
          <div className="col-sm-3">
            <Navigation />   
          </div>
        
        <div className="col">
     
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/Infos" element={<Infos />} />
              <Route path="/Series" element={<Series />} />
              <Route path="/Sénescence" element={<Sénescence />} />
              <Route path="/UneNuitàOsaka" element={<UneNuit />} />
              <Route path="/DélibérezVous" element={<DV />} />
              <Route path="/VoyagePictural" element={<VP />} />

            </Routes>
        
          </div>
          </div>
          </div>
          
 
       
      
      )
  };    
export default App;
