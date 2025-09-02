import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

export const getMyCart = async (req, res) => {
  let cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
  if (!cart) cart = await Cart.create({ user: req.user.id, items: [] });
  res.json(cart);
};

export const addToCart = async (req, res) => {
  const { productId, qty } = req.body;
  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  let cart = await Cart.findOne({ user: req.user.id });
  if (!cart) cart = await Cart.create({ user: req.user.id, items: [] });
  const idx = cart.items.findIndex(i => i.product.toString() === productId);
  if (idx > -1) cart.items[idx].qty += qty || 1;
  else cart.items.push({ product: productId, qty: qty || 1 });
  await cart.save();
  res.json(await cart.populate('items.product'));
};

export const removeFromCart = async (req, res) => {
  const { productId } = req.body;
  let cart = await Cart.findOne({ user: req.user.id });
  if (!cart) return res.status(404).json({ error: 'Cart not found' });
  cart.items = cart.items.filter(i => i.product.toString() != productId);
  await cart.save();
  res.json(await cart.populate('items.product'));
};

export const clearCart = async (req, res) => {
  let cart = await Cart.findOne({ user: req.user.id });
  if (!cart) return res.status(404).json({ error: 'Cart not found' });
  cart.items = [];
  await cart.save();
  res.json(cart);
};
