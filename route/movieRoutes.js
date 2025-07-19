import { Router } from "express";
import {
  getMovieDetails,
  getSearchMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "../controllers/movieController.js";

const router = Router();

router.get("/trending", getTrendingMovies);
router.get("/top_rated", getTopRatedMovies);
router.get("/movie_details/:id", getMovieDetails);
router.post("/search", getSearchMovies);
export default router;
