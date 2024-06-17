// controllers/itemController.js
const Item = require('../models/item');

const saveItems = async (req, res) => {
  try {
    const items = req.body.map(item => ({
      id: item.id,
      nome: item.nome,
      preco: item.preco,
      tipo: item.tipo
    }));
    await Item.insertMany(items);
    res.status(201).send({ message: 'Items saved successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error saving items', error });
  }
};

module.exports = {
  saveItems
};
