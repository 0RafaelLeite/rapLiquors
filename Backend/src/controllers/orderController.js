const Order = require('../models/Order');
const Item = require('../models/Item');

exports.createOrder = async (req, res) => {
  const { items } = req.body;
  try {
    let totalPrice = 0;
    for (const item of items) {
      const item = await Item.findById(item.itemId);
      if (!item) {
        return res.status(404).json({ msg: `Item with ID ${item.itemId} not found` });
      }
      totalPrice += item.price * item.quantity;
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
    const orders = await Order.find({ userId: req.user.id }).populate('items.itemId', 'name brand price');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};
