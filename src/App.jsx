import { Link } from 'react-router-dom';
import "./App.css";
import Accueil from "./components/Accueil";
import Navigation from "./components/Navigation";

const App = () => {
  render(); {
    return (
      <div className="App">
        <Navigation />;   
        <Accueil />;
      </div>
      )
  };    
};
export default App;
