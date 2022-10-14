import "./../Api/Api.css";
import { useState } from "react";
import React from "react";

const Api = () => {
  

  const baseURL = "https://api.sampleapis.com/coffee/hot";
  function fetchData() {
      fetch(baseURL)
        .then((resp) => resp.json())
        .then((data) => { 
        });
    
  }

  fetchData(); 



  

  return (
    <div>
       
      <pre>JSON GOES HERE</pre>
    </div>
  );

  }
export default Api;
