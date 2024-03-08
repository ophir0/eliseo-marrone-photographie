const Navigation = () => {
     return (
        <nav>
          <div className="logo">
            <h1>Eliséo Marrone</h1>
            <h5>photographie</h5>
          </div>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/Series">Series</Link></li>
            <li><Link to="/Infos">Infos</Link></li>
          </ul>
        </nav>
    );
  
};
  
  export default Navigation;
  