import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import Accueil from "./components/Accueil";
import Infos from "./components/Infos";
import Series from "./components/Series";

const App = () => {
  
    return (
      <div className="container">
        <div className="row">
          <div className="logo">
              <h1>Éliséo Marrone</h1>
              <h7>photographie</h7> 
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
            </Routes>
        
          </div>
          </div>
          </div>
          
 
       
      
      )
  };    
export default App;
