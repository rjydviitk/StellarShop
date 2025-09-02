import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
dotenv.config();

const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/stellar_shop';

const sample = [
  { title: 'Wireless Headphones', price: 59.99, category: 'electronics', stock: 50 },
  { title: 'Running Shoes', price: 79.99, category: 'fashion', stock: 30 },
  { title: 'Smart Watch', price: 99.99, category: 'electronics', stock: 40 }
];

(async () => {
  await mongoose.connect(MONGO, { dbName: 'stellar_shop' });
  await Product.deleteMany({});
  await Product.insertMany(sample);
  console.log('Seeded products'); 
  process.exit(0);
})();
