import "./../Api/Coffe.css";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

const Coffe = () => {
  const [coffee, setCoffe] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getCoffe();
    console.log("useEffect");
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const filtered = coffee.filter(
    (item) =>
      item.title.toLowerCase() &&
      item.description.toLowerCase().includes(search)
  );

  const baseURL = "https://api.sampleapis.com/coffee/hot";

  async function getCoffe() {
    try {
      const response = await axios.get(baseURL);
      setCoffe(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  console.log("run", coffee);

  return (
    <div>
      <div className="search">
        <input
          value={search}
          onChange={handleInput}
          placeholder="Search for .."
        ></input>

        <select name="" id="select">
          <option value="">All</option>
          <option value="Title">Title</option>
          <option value="">Description</option>
          <option value="">Img</option>
          <option value="">Ingredients</option>
        </select>
      </div>

      {filtered.map((item, index) => (
        <div key={index}>
          <div className="container">
            <div className="title">{item.title}</div>
            <div className="title">{item.description}</div>
            <div>
              <img src={item.image} className="title-img" alt="img"></img>
            </div>
            <div className="title">{item.ingredients}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Coffe;
