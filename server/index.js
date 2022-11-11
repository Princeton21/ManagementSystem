const express = require("express");
const cors = require("cors"); //Using cors to allow cross origin resource sharing
const mongoose = require("mongoose");
const app = express();

require("dotenv").config(); // Using dotenv to hide sensitive data
const port = process.env.PORT || 5000;

const ItemModel = require("./models/Food");

app.use(express.json());
app.use(cors()); 
mongoose.connect( 
  process.env.MONGO_URI,
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

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${port}...`);
});
