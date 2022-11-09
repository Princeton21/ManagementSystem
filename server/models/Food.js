const mongoose = require("mongoose");

const ShoppingSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    itemPrice: {
        type: Number,
        required: true,
    },
    itemQuantity: {
        type: Number,
        required: true,
    },
})

const Food = mongoose.model("foodData", ShoppingSchema);

module.exports = Food;