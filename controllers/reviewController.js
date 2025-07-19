import Review from '../models/Review.js';

export const addReview = async (req, res) => {
  const { tmdbId, comment, rating } = req.body;
  const review = await Review.create({ userId: req.user.id, tmdbId, comment, rating });
  res.status(201).json(review);
};

export const getReviews = async (req, res) => {
  const reviews = await Review.find({ tmdbId: req.params.tmdbId }).populate('userId', 'username');
  res.json(reviews);
};
