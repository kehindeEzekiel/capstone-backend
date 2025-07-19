// Mongoose watchlist schema
import mongoose from 'mongoose';

const watchlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  movies: [
    {
      tmdbId: { type: Number, required: true },
      title: String,
      posterPath: String,
      rating: Number,
      addedAt: { type: Date, default: Date.now }
    }
  ]
});

export default mongoose.model('Watchlist', watchlistSchema);
