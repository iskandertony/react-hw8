import "./../Api/Coffe.css";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";


const Coffe = () => {
  const [coffee, setCoffe] = useState([]);

  useEffect(() => {
    getCoffe();
    console.log("useEffect");
  }, [])

  const baseURL = "https://api.sampleapis.com/coffee/hot";

  async function getCoffe() {
    try {
      const response = await axios.get(baseURL);
      setCoffe(response.data)
    } catch (error) {
      console.error(error);
    }
  }




  console.log("run", coffee);

  return (
    <div>
      {coffee.map((item, index) =>
        <div key={index} >
          <div className="container">
            <div className="title">{item.title}</div>
            <div className="title">{item.description}</div>
          </div>
        </div>

      )}
      <pre>JSON GOES HERE</pre>
    </div>
  );

}
export default Coffe;
