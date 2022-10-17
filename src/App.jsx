import * as React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Coffe from "./componets/Api/Coffe";
import CoffeCold from "./componets/About/CoffeCold";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <div className="nav">
        <Link to="about" className="menu">
          ColdCoffee
        </Link>

        <Link to="/" className="menu">
          HotCofffee
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Coffe />} />
        <Route path="about" element={<CoffeCold />} />
      </Routes>
    </div>
  );
}

export default App;
