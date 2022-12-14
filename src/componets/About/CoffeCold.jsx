import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import "./../About/CoffeCold.css"


const CoffeCold = ({takeText}) => {
  const [coffeeCold, setCoffeCold] = useState([]);
  



  useEffect(() => {
    getCoffeCold();
    console.log("useEffect");
  }, []);

  const baseURL = "https://api.sampleapis.com/coffee/iced";
  async function getCoffeCold() {
    try {
      const response = await axios.get(baseURL);
      setCoffeCold(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div>{takeText}</div>
      <div>
        {coffeeCold.map((item) => (
          <div key={item.id}>
            <div className="container">
              <div className="title">{item.title}</div>
              <div className="title">{item.description}</div>
              <div >
                <img src={item.image} className="title-img"></img>
              </div>
              <div className="title">{item.ingredients}</div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default CoffeCold;
