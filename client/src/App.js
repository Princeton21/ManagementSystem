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
  const updateItem = (id) => {
    Axios.put("http://localhost:3001/update", {
      id: id,
      newItemName: newItemName,
    });
  };
  const deleteItem = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
  };

  return (
    <div className="App">
      <h1>Shopping list</h1>
      <div className="card-container">
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
      </div>
      <hr />
      <h1>Cart</h1>
      <div className="grid_container">
        {shopList.map((val, key) => {
          return (
            <div className="render_card" key={key}>
              <h3>{val.itemName}</h3>
              <p>Price: {val.itemPrice}</p>
              <p>Quantity: {val.itemQuantity}</p>
              <input
                type="text"
                placeholder="Enter new item name..."
                onChange={(e) => {
                  setNewItemName(e.target.value);
                }}
              />
              <button onClick={() => updateItem(val._id)}>Update</button>
              <button onClick={() => deleteItem(val._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
