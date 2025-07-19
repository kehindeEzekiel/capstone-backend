// Mongoose user schema
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, unique: true },
  lastName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  watchlist: { type: [String], default: [] },
  favorites: { type: [String], default: [] },
});

export default mongoose.model("User", userSchema);
