import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./route/auth.route.js";
import movieRoutes from "./route/movieRoutes.js";
import favouriteRoute from "./route/favoriteRoutes.js";
import watchlistRoute from "./route/watchlistRoutes.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Log all incoming requests
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`📥 Incoming Request: ${req.method} ${req.originalUrl}`);
  console.log(`🧾 Body:`, req.body);
  console.log(`🔎 Query:`, req.query);

  // Log when response is sent
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`📤 Response: ${res.statusCode} (${duration}ms)`);
  });

  next();
});

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.use("/auth", authRoute);
app.use("/movies", movieRoutes);
app.use("/favorite", favouriteRoute);
app.use("/watchlist", watchlistRoute);

const PORT = process.env.PORT || 5000;

const start = async () => {
  console.log("Connecting to the database...");
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("Connected to the database successfully!");
    app.listen(PORT, () => {
      console.log(`Your Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
start();
