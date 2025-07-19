// Movie handling logic
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const searchMovies = async (req, res) => {
  try {
    const query = req.query.query;

    const tmdbRes = await axios.get(
      `https://www.themoviedb.org/tv/1396-breaking-bad`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          query: query,
        },
      }
    );

    res.json(tmdbRes.data.results);
  } catch (err) {
    res.status(500).json({ message: "TMDB error", error: err.message });
  }
};

export const getTrendingMovies = async (req, res) => {
  // console.log("I am called out 1");
  try {
    const tmdbRes = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
        },
      }
    );
    // console.log("res -->", tmdbRes);
    res.json(tmdbRes.data.results);
  } catch (err) {
    res.status(500).json({ message: "TMDB error", error: err.message });
  }
};

export const getTopRatedMovies = async (req, res) => {
  // console.log("I am called out 2");
  try {
    const tmdbRes = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
        },
      }
    );
    // console.log("res -->", tmdbRes);
    res.json(tmdbRes.data.results);
  } catch (err) {
    res.status(500).json({ message: "TMDB error", error: err.message });
  }
};

export const getMovieDetails = async (req, res) => {
  try {
    const movieId = req.params.id;

    const tmdbRes = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
        },
      }
    );
    res.json(tmdbRes.data);
  } catch (err) {
    res.status(500).json({ message: "TMDB error", error: err.message });
  }
};

export const getSearchMovies = async (req, res) => {
  try {
    const { term } = req.body;
    const tmdbRes = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${term}`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
        },
      }
    );
    res.status(200).json({
      status: true,
      data: tmdbRes.data,
      message: "done",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "error fetching movie",
    });
  }
};
