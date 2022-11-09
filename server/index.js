const express = require("express");
const mongoose = require("mongoose");
const app = express();

const FoodModel = require("./models/Food");

app.use(express.json());

mongoose.connect(
  "mongodb+srv://newuser:crud123@information.mp6xwst.mongodb.net/shopping_list?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.get("/", async (req, res) => {
    const food = new FoodModel({ itemName: "Pizza", itemPrice: 2.99, itemQuantity: 1 });
    try {
      await food.save();
      res.send("Item has been saved to the database");
    } catch (err) {
      console.log(err);
    }
});



app.listen(3001, () => {
  console.log("Server running on port 3001...");
});
