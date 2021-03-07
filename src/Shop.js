import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Shop() {
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    let data = [];
    axios
      .get("https://fortnite-api.theapinetwork.com/upcoming/get")
      .then(response => {
        // console.log(response.data);
        data = response.data;
        //console.log(...data.data);
        setShopItems(data.data);
      });
  };

  return (
    <div>
      {shopItems.map(item => {
        return (
          <h1 key={item.itemId}>
            <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
          </h1>
        );
      })}
    </div>
  );
}
