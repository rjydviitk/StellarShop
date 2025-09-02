import Order from '../models/Order.js';
import Cart from '../models/Cart.js';

export const placeOrder = async (req, res) => {
  const { address } = req.body;
  let cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
  if (!cart || cart.items.length === 0) return res.status(400).json({ error: 'Cart is empty' });
  const items = cart.items.map(i => ({ product: i.product._id, qty: i.qty, price: i.product.price }));
  const total = items.reduce((s,i)=> s + i.qty * i.price, 0);
  const order = await Order.create({ user: req.user.id, items, total, status: 'paid', address });
  cart.items = [];
  await cart.save();
  res.status(201).json(order);
};

export const myOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
  res.json(orders);
};
