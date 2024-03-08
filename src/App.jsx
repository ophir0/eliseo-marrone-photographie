import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import Accueil from "./components/Accueil";
import Infos from "./components/Infos";
import Series from "./components/Series";

const App = () => {
  
    return (
      <div className="App">
        <Navigation />   
        
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Infos" element={<Infos />} />
          <Route path="/Series" element={<Series />} />
        </Routes>
      </div>
      )
  };    
export default App;
