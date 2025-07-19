# 🎬 Movie App Backend

This is the backend API of the Movie Recommendation App, built with **Node.js + Express + MongoDB** and deployed on **Render**.

## 🌐 Live URL

Backend deployed at: [https://capstone-backend-qnmd.onrender.com/](#)

## ⚙️ Features

- User Registration & Login (JWT auth)
- Secure password hashing with bcrypt
- REST API endpoints for:
  - Movies (search, discover)
  - Favorites and watchlists
  - User profile
  - Ratings and reviews
- Connected to MongoDB Atlas
- CORS-enabled for frontend integration

## 🛠️ Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- JWT + bcrypt
- CORS + dotenv
- jsonwebtoken(JWT)
- bcrypt for password encryption
- axios for api calls
- Deployed on Render

## 🔧 Project Setup

```bash
cd server
npm install
npm run dev
```

## 🌍 Environment Variables

Create a `.env` file in the `/server` folder:

```env
PORT=your-backend-port
MONGO_URI=your-mongoDB-url
JWT_SECRET=your-jwt-token
TMDB_API_KEY=your-tmdb-api-key
```

## 🖥️ Render Deployment Notes

- **Service Type:** Web Service
- **Build Command:** `npm install`
- **Start Command in production:** `npm start`
- **Start Command in development:** `npm run dev`

## 🗂️ Folder Structure

```
/server
  ├── /routes
  ├── /controllers
  ├── /models
  ├── /middleware
  ├── app.js
  ├── package.json
```

## 🛡️ Security Notes

- Tokens are stored in localStorage (frontend)
- Always validate and sanitize user inputs
- Do not expose your MongoDB URI or JWT secret

## 🙌 Author

**Kehinde Ezekiel**
