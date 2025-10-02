import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import Accueil from "./components/Accueil";
import Infos from "./components/Infos";
import ContactForm from "./components/Contact";
import Series from "./components/Series";
import Sénescence from "./components/Sénescence";
import UneNuit from "./components/UneNuit";
import DV from "./components/DV"; 
import VP from "./components/VP"; 
import Emergent from "./components/Emergent";
import TH from "./components/TH";

const App = () => {
  
    return (
      <div className="container">
        <div className="row">
          <div className='col-sm-3'>
          <div className="logo">
              <h3>Eliséo Marrone</h3>
              <h5>photographie</h5> 
            </div>
            </div>
          </div>
        <div className="row">
          <div className="col-sm-3">
            <Navigation />   
          </div>
        
        <div className="col">
          <div className="ComponentArea">
     
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/Infos" element={<Infos />} />
              <Route path="/Series" element={<Series />} />
              <Route path="/Sénescence" element={<Sénescence />} />
              <Route path="/UneNuitàOsaka" element={<UneNuit />} />
              <Route path="/DélibérezVous" element={<DV />} />
              <Route path="/TarmacHublot" element={<TH />} />
              <Route path="/VoyagePictural" element={<VP />} />
              <Route path="/Emergent" element={<Emergent />} />
              <Route path="/Contact" element={<ContactForm />} />

            </Routes>
            </div>
          </div>
          <footer>©2025 Eliséo Marrone</footer>
          </div>
          </div>
          
 
       
      
      )
  };    
export default App;
