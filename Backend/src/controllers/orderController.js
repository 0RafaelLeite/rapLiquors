const Order = require('../models/Order');

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
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id });
    res.json(orders);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
