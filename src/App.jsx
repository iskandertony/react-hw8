import * as React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Coffe from "./componets/Api/Coffe";
import CoffeCold from "./componets/About/CoffeCold";
import Effects from "./componets/Effects/Effects";
import { useEffect, useState } from "react";



const App = () => {
  const [headerText, setText] = useState("")


  return (
    <div className="App">

      <div className="nav">
        <Link to="about" className="menu">
          ColdCoffee
        </Link>

        <Link to="effect" className="menu">
          Effect
        </Link>

        <Link to="/" className="menu">
          HotCofffee
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Coffe />} />
        <Route path="about" element={<CoffeCold takeText={headerText} />} />
        <Route path="effect" element={<Effects takeText={headerText} setText={setText} />} />
      </Routes>
    </div>
  );
}

export default App;
