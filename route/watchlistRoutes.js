import express from "express";
import {
  addMovieToWatchlist,
  getWatchlist,
  removeMovieFromWatchlist,
} from "../controllers/watchlistController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addMovieToWatchlist);
router.get("/", protect, getWatchlist);
router.delete("/:id", protect, removeMovieFromWatchlist);

export default router;
