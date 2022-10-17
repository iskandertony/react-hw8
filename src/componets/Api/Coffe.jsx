import "./../Api/Coffe.css";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { Input, Select, Spin } from 'antd';

const Coffe = () => {
  const [coffee, setCoffe] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false)
  const { Option } = Select

  useEffect(() => {
    getCoffe();
    console.log("useEffect");
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSelect = (value) => {
    console.log(`selected ${value}`);
  }
  const filtered = coffee.filter(
    (item) =>
      item.title.toLowerCase() &&
      item.description.toLowerCase().includes(search)
  );

  const baseURL = "https://api.sampleapis.com/coffee/hot";

  async function getCoffe() {
    try {
      setLoading(true)
      const response = await axios.get(baseURL);
      setCoffe(response.data);
      setLoading(false)
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }

  console.log("run", coffee);

  return (
    <div>
      <div className="search">
        <Input
          value={search}
          onChange={handleInput}
          placeholder="Search for .."
        ></Input>

        <Select onChange={handleSelect} name="" id="select" defaultValue="All"
          style={{
            width: 120,
          }}
        >
          <Option value="">All</Option>
          <Option value="Title">Title</Option>
          <Option value="">Description</Option>
          <Option value="">Img</Option>
          <Option value="">Ingredients</Option>
        </Select>
      </div>

      {loading
        ? (<div><Spin /></div>)
        : (
          filtered.map((item ) => (
            <div key={item.id}>
              <div className="container">
                <div className="title">{item.title}</div>
                <div className="title">{item.description}</div>
                <div>
                  <img src={item.image} className="title-img" alt="img"></img>
                </div>
                <div className="title">{item.ingredients}</div>
              </div>
            </div>
          ))
        )
      }
    </div>
  );
};
export default Coffe;
