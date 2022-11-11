const express = require("express");
const cors = require("cors"); //Using cors to allow cross origin resource sharing
const mongoose = require("mongoose");
const app = express();

require("dotenv").config(); // Using dotenv to hide sensitive data
const port = process.env.PORT || 5000;

const ItemModel = require("./models/Item");
const UserModel = require("./models/User");

app.use(express.json());
app.use(cors()); 
mongoose.connect( 
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
  }
);
//Cart
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
  const item = new ItemModel({
    itemName: name,
    itemPrice: price,
    itemQuantity: quantity,
  });
  try {
    await item.save();
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


//User
app.post("/userinsert", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const user = new UserModel({
    userName: name,
    userEmail: email,
    userPassword: password,
  });
  try {
    await user.save();
    res.send("User has been saved to the database");
    console.log("user added to database");
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${port}...`);
});
