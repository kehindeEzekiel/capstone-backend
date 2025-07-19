import mongoose from 'mongoose';

const favoriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tmdbId: { type: Number, required: true },
  title: String,
  posterPath: String,
  rating: Number,
  addedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Favorite', favoriteSchema);