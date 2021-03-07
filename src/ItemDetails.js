import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const ItemDetails = () => {
  const [item, setDetails] = useState({ images: {} });
  useEffect(() => {
    axios
      .get(`https://fortnite-api.theapinetwork.com/item/get?id=${itemId.id}`)
      .then(response => {
        // data = response.data.data.item;
        setDetails(response.data.data.item);
      });
  }, []);

  const goBackHandler = () => {
    console.log(history);
    history.goBack();
  };

  const itemId = useParams();
  const history = useHistory();
  console.log(history);
  return (
    <div>
      <button onClick={goBackHandler}>Go Back</button>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <img src={item.images.background} />
    </div>
  );
};

export default ItemDetails;
