
import * as React from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Coffe from "./componets/Api/Coffe"
import About from "./componets/About/About";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Coffe />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}





export default App;
