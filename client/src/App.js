import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [newItemName, setNewItemName] = useState("");

  const [shopList, setShopList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      // console.log(response);
      setShopList(response.data);
    });
  }, []);

  const addToList = () => {
    // console.log(name + price + quantity);
    Axios.post("http://localhost:3001/insert", {
      name: name,
      price: price,
      quantity: quantity,
    });
  };
  const updateItem = () => {
    Axios.put("http://localhost:3001/update", {
      name: name,
      newName: newItemName,
    });
  }

  return (
    <div className="App">
      <h1>Shopping list</h1>
      <label>Item name</label>
      <input
        type="text"
        placeholder="Enter an item"
        onChange={(e) => setName(e.target.value)}
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
      <button onClick={addToList}>Add to the list</button>
      <hr />
      <h2>Shopping list</h2>
      {shopList.map((val, key) => {
        return (
          <div key={key}>
            <h3>{val.itemName}</h3>
            <p>Price: {val.itemPrice}</p>
            <p>Quantity: {val.itemQuantity}</p>
            <input
              type="text"
              placeholder="Enter new food name..."
              onChange = {(e) => {setNewItemName(e.target.value)}}
            />
            <button onClick={() => updateItem(val._id)}>Update</button>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
