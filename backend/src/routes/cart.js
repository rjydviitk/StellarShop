import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { getMyCart, addToCart, removeFromCart, clearCart } from '../controllers/cart.js';

const router = Router();
router.get('/', requireAuth, getMyCart);
router.post('/add', requireAuth, addToCart);
router.post('/remove', requireAuth, removeFromCart);
router.post('/clear', requireAuth, clearCart);
export default router;
