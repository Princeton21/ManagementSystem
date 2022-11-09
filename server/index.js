const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const ItemModel = require("./models/Food");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://newuser:crud123@information.mp6xwst.mongodb.net/shopping_list?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.put("/update", async (req, res) => {
  const newItemName = req.body.newItemName;
  const id = req.body.id;
  try {
    await ItemModel.findById(id, (err, updatedItem) => {
      updatedItem.itemName = newItemName;
      updatedItem.save();
      res.send("update");
    });
  } catch (err) {
    console.log(err);
  }
});
app.post("/insert", async (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const quantity = req.body.quantity;
  const food = new ItemModel({
    itemName: name,
    itemPrice: price,
    itemQuantity: quantity,
  });
  try {
    await food.save();
    res.send("Item has been saved to the database");
  } catch (err) {
    console.log(err);
  }
});
app.get("/read", async (req, res) => {
  ItemModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  // res.send(id);
  await ItemModel.findByIdAndRemove(id).exec();
  res.send("deleted");
});

app.listen(3001, () => {
  console.log("Server running on port 3001...");
});
