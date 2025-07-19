import express from 'express';
import { addReview, getReviews } from '../controllers/reviewController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', protect, addReview);
router.get('/:tmdbId', getReviews);


export default router;
