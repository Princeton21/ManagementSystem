import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import styles from "./Card.module.css";
// import Button from "../../ui/Button/Button";
const Card = () => {
    const [newItemName, setNewItemName] = useState("");
    const [showCard, setShowCard] = useState(true);

    const [shopList, setShopList] = useState([]);
    // UseEffect hook to always update when a new item is added to the database
      useEffect(() => {
        Axios.get("http://localhost:3001/read").then((response) => {
          // console.log(response);
          setShopList(response.data);
        });
      });

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
    <>
      <div className={styles.flex_container}>
        {shopList.map((val, key) => {
          return (
            <div className={styles.mapped_card} key={key}>
              <h3>{val.itemName}</h3>
              <p>Price: {val.itemPrice}</p>
              <p>Quantity: {val.itemQuantity}</p>
              <button
                      className={showCard ? `${styles.active}` : { display:"none" }}
                onClick={() => setShowCard(showCard ^ 1)}
              >
                {!showCard ? "X" : "Update"}
              </button>
              {showCard ? null : (
                <div>
                  <input
                    type="text"
                    placeholder="Enter new item name..."
                    onChange={(e) => {
                      setNewItemName(e.target.value);
                    }}
                  />
                  <button onClick={() => updateItem(val._id)}>Update</button>
                </div>
              )}
              <button onClick={() => deleteItem(val._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card