import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { placeOrder, myOrders } from '../controllers/orders.js';

const router = Router();
router.post('/', requireAuth, placeOrder);
router.get('/', requireAuth, myOrders);
export default router;
