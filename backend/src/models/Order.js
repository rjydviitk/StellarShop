import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    qty: Number,
    price: Number
  }],
  total: Number,
  status: { type: String, enum: ['pending','paid','shipped','delivered','cancelled'], default: 'pending' },
  paymentId: String,
  address: {
    line1: String, line2: String, city: String, state: String, zip: String, country: String
  }
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
