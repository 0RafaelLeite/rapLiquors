const mongoose = require('mongoose');

const beverageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  type: {type: String, required: true},
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const Beverage = mongoose.model('Beverage', beverageSchema);

module.exports = Beverage;
