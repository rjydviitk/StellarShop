import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';
import cartRoutes from './routes/cart.js';
import orderRoutes from './routes/orders.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*', credentials: true }));
app.use(helmet());
app.use(morgan('dev'));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 1000 });
app.use(limiter);

// DB
mongoose.connect(process.env.MONGO_URI, { dbName: 'stellar_shop' })
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err.message));

// Health
app.get('/api/health', (req, res) => res.json({ ok: true, ts: Date.now() }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

export default app;
