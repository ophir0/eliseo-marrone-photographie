import { Link, Route, Routes } from "react-router-dom";

const Navigation = () => {
     return (
        <nav>
              
          <ul>
            <Link to="/" class="list">Accueil</Link>
            <Link to="/Series" class="list">Series</Link>
            <Link to="/Infos" class="list">Infos</Link>
          </ul>
    
        </nav>
    );
  
};
  
  export default Navigation;
  