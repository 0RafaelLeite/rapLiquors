const Order = require('../models/Order');
const Beverage = require('../models/Beverage');

exports.createOrder = async (req, res) => {
  const { items } = req.body;
  try {
    let totalPrice = 0;
    for (const item of items) {
      const beverage = await Beverage.findById(item.beverageId);
      if (!beverage) {
        return res.status(404).json({ msg: `Beverage with ID ${item.beverageId} not found` });
      }
      totalPrice += beverage.price * item.quantity;
    }
    const newOrder = new Order({
      userId: req.user.id,
      items,
      totalPrice,
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
