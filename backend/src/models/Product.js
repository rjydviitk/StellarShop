import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  images: [{ type: String }],
  category: { type: String, index: true },
  stock: { type: Number, default: 0 },
  rating: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
