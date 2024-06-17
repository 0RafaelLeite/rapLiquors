const Order = require('../models/Order');
const Beverage = require('../models/Beverage');

exports.createOrder = async (req, res) => {
  const { items, totalPrice, paymentOption, installments } = req.body;
  try {
    const newOrder = new Order({
      userId: req.user.id,
      items,
      totalPrice,
      paymentOption,
      installments,
    });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).populate('items.beverageId', 'name brand price');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};
