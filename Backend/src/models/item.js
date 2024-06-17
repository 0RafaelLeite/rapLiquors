const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  tipo: { type: String, required: true }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
