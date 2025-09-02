import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const signToken = (user) => jwt.sign(
  { id: user._id, email: user.email, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '7d' }
);

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ error: 'Email already in use' });
    const user = await User.create({ name, email, password });
    const token = signToken(user);
    res.json({ user: { id: user._id, name, email, role: user.role }, token });
  } catch (e) { res.status(500).json({ error: e.message }); }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });
    const match = await user.comparePassword(password);
    if (!match) return res.status(400).json({ error: 'Invalid credentials' });
    const token = signToken(user);
    res.json({ user: { id: user._id, name: user.name, email, role: user.role }, token });
  } catch (e) { res.status(500).json({ error: e.message }); }
};
