import { Link, Route, Routes } from "react-router-dom";

const Navigation = () => {
     return (
        <nav>
          <div className="logo">
            <h1>Éliséo Marrone</h1>
            <h5>photographie</h5>
          </div>
          <ul>
            <Link to="/" class="list">Accueil</Link>
            <Link to="/Series" class="list">Series</Link>
            <Link to="/Infos" class="list">Infos</Link>
          </ul>
        </nav>
    );
  
};
  
  export default Navigation;
  