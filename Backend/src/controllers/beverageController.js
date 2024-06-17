const Beverage = require('../models/Beverage');

exports.createBeverage = async (req, res) => {
  const { name, brand, price, quantity, type } = req.body;
  try {
    const newBeverage = new Beverage({ name, brand, price, quantity, type });
    await newBeverage.save();
    res.status(201).json(newBeverage);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.updateBeverage = async (req, res) => {
  const { id } = req.params;
  const { name, brand, price, quantity, type } = req.body;
  try {
    const beverage = await Beverage.findByIdAndUpdate(id, { name, brand, price, quantity, type }, { new: true });
    if (!beverage) {
      return res.status(404).json({ msg: 'Beverage not found' });
    }
    res.json(beverage);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.deleteBeverage = async (req, res) => {
  const { id } = req.params;
  try {
    const beverage = await Beverage.findByIdAndDelete(id);
    if (!beverage) {
      return res.status(404).json({ msg: 'Beverage not found' });
    }
    res.json({ msg: 'Beverage removed' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.updateStock = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  try {
    const beverage = await Beverage.findByIdAndUpdate(id, { quantity }, { new: true });
    if (!beverage) {
      return res.status(404).json({ msg: 'Beverage not found' });
    }
    res.json(beverage);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};
