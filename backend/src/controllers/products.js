import Product from '../models/Product.js';

export const listProducts = async (req, res) => {
  const { q, category, sort } = req.query;
  const filter = {};
  if (q) filter.title = { $regex: q, $options: 'i' };
  if (category) filter.category = category;
  const sortMap = { price_asc: { price: 1 }, price_desc: { price: -1 }, rating: { rating: -1 }, newest: { createdAt: -1 } };
  const sortOpt = sortMap[sort] || {};
  const products = await Product.find(filter).sort(sortOpt).limit(200);
  res.json(products);
};

export const getProduct = async (req, res) => {
  const p = await Product.findById(req.params.id);
  if (!p) return res.status(404).json({ error: 'Not found' });
  res.json(p);
};

export const createProduct = async (req, res) => {
  try {
    const p = await Product.create(req.body);
    res.status(201).json(p);
  } catch (e) { res.status(400).json({ error: e.message }); }
};

export const updateProduct = async (req, res) => {
  const p = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(p);
};

export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
