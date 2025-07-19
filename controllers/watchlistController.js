import userModel from "../model/user.model.js";
import axios from "axios";

export const addMovieToWatchlist = async (req, res) => {
  const { movieId } = req.body;
  const userId = req.user?.id;

  try {
    // First check if user exists and if movie is already in favorites
    const userData = await userModel.findById(userId);

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if movie is already in watchlist
    const exists = userData.watchlist?.includes(movieId);
    if (exists) {
      return res.status(409).json({ message: "Already in watchlist" });
    }

    // Add to watchlist
    const response = await userModel.findByIdAndUpdate(
      userId,
      { $push: { watchlist: movieId } },
      { new: true } // This should be in options, not in the update object
    );

    res.status(200).json({
      status: true,
      data: response?.watchlist,
    });
  } catch (error) {
    console.error("Error adding watchlist:", error);
    res.status(500).json({
      status: false,
      message: "Error adding watchlist",
    });
  }
};

export const getWatchlist = async (req, res) => {
  const userId = req.user?.id;

  try {
    // Get user's watchlist movie IDs
    const userWatchlist = await userModel.findById(userId);

    if (
      !userWatchlist ||
      !userWatchlist.watchlist ||
      userWatchlist.watchlist.length === 0
    ) {
      return res.status(200).json({
        status: 200,
        data: [],
        message: "No watchlist items found",
      });
    }

    // Fetch full movie details for each watchlist movie ID
    const moviePromises = userWatchlist.watchlist.map(async (movieId) => {
      try {
        const tmdbRes = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            params: {
              api_key: process.env.TMDB_API_KEY,
            },
          }
        );
        return tmdbRes.data;
      } catch (error) {
        console.error(`Error fetching movie ${movieId}:`, error.message);
        // Return null for failed requests, we'll filter them out
        return null;
      }
    });

    // Wait for all movie details to be fetched
    const movieResults = await Promise.all(moviePromises);

    // Filter out any null results (failed requests)
    const validMovies = movieResults.filter((movie) => movie !== null);

    res.status(200).json({
      status: 200,
      data: validMovies,
      message: "watchlist fetched",
    });
  } catch (error) {
    console.error("Error fetching watchlist:", error);
    res.status(500).json({
      status: false,
      message: "Error fetching user watchlist",
    });
  }
};

export const removeMovieFromWatchlist = async (req, res) => {};
