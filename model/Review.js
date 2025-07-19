import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tmdbId: Number,
  comment: String,
  rating: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Review', reviewSchema);
