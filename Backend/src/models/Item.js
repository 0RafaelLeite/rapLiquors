const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    codigo: { type: Number, unique: true },
    nome: String,
    preco: Number,
    tipo: String,
    imagem: String
});

module.exports = mongoose.model('Item', itemSchema);