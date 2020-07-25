const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
   name: String,
   price: Number,
   sellVolume: String,
   image: String,
   author: String,
   type: String,
   enteredAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);