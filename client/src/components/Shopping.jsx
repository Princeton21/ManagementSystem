import React, { useState } from "react";
import Axios from "axios";
import styles from "../components/Shopping.module.css"; // Using module to guarantee that the styles are only applied to this component
import Card from "./Card/Card";
import Btn from "../ui/Button/Btn";

const Shopping = () => {

  // Reach useState hook to set the name price and quantity of the item
  const [name, setName] = useState(""); 
  const [price, setPrice] = useState(0); 
  const [quantity, setQuantity] = useState(0);

  // arrow function to add the values to the database using Axios
  const addToList = () => {
    // console.log(name + price + quantity);
    Axios.post("http://localhost:3001/insert", {
      name: name,
      price: price,
      quantity: quantity,
    });
  };
  return (
    <div className={styles.App}>
      <h1>Shopping list</h1>
      <div className={styles.card_container}>
        <label>Item name</label>

        <input
          type="text"
          placeholder="Enter an item"
          onChange={(e) => setName(e.target.value)} // Using onChange event to update the state
        />
        <label>Item price</label>
        <input
          type="number"
          placeholder="Enter the price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Item quantity</label>
        <input
          type="number"
          placeholder="Enter the quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Btn onClick={addToList}>Add to the list</Btn>
      </div>
      <hr />
      <h1>Cart</h1>
      <Card />
    </div>
  );
};

export default Shopping;
