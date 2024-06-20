const Item = require('../models/Item');

exports.addItem = async (req, res) => {
    const { codigo, nome, preco, tipo, imagem } = req.body;

    try {
        const existingItem = await Item.findOne({ codigo });
        if (existingItem) {
            return res.status(400).json({ message: 'Item already exists' });
        }

        const newItem = new Item({ codigo, nome, preco, tipo, imagem });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: 'Error adding item', error });
    }
};

exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items', error });
    }
};

exports.updateItem = async (req, res) => {
  const { id } = req.params;
  const {  codigo, nome, preco, tipo, imagem } = req.body;
  try {
    const item = await Item.findByIdAndUpdate(id, {  codigo, nome, preco, tipo, imagem }, { new: true });
    if (!item) {
      return res.status(404).json({ msg: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findByIdAndDelete(id);
    if (!item) {
      return res.status(404).json({ msg: 'Item not found' });
    }
    res.json({ msg: 'Item removed' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};
