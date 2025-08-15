// ## 1. IMPORTS

import express from "express";
<!-- // Express framework import karta hai.
// Isse routes, middlewares, APIs easily ban paate hain. -->

import "dotenv/config";
<!-- // .env file ke environment variables ko load karta hai.
// Variables ko process.env se access kar sakte ho.
// Example: process.env.PORT -->

import cookieParser from "cookie-parser";
<!-- // Cookies ko parse karne ka middleware.
// Request ke cookies req.cookies me aa jaate hain. -->

import authRoutes from "./routes/auth.route.js";
<!-- // Authentication-related routes import karta hai (login, register, etc.). -->

import { connectDB } from "./lib/db.js";
<!-- // Database connect karne ka custom function import karta hai. -->

import userRoutes from "./routes/user.route.js";
<!-- // User-related routes import karta hai (profile, update, etc.). -->

// ## 2. APP CREATION

const app = express();
<!-- // Express application ka instance banata hai. -->

const PORT = process.env.PORT;
<!-- // Port number `.env` file se read karta hai. -->

// ## 3. MIDDLEWARES

app.use(express.json());
<!-- // JSON request body ko parse karta hai.
// Example: { "name": "Labham" } → req.body.name se access hota hai. -->

app.use(cookieParser());
<!-- // Cookies ko parse karke req.cookies me available karata hai. -->

// ## 4. ROUTES SETUP

app.use("/api/auth", authRoutes);
<!-- // "/api/auth" se start hone wale requests authRoutes file me handle hote hain.
// Example: "/api/auth/login" → auth.route.js. -->

app.use("/api/users", userRoutes);
<!-- // "/api/users" se start hone wale requests userRoutes file me handle hote hain.
// Example: "/api/users/profile" → user.route.js. -->

// ## 5. SERVER START + DB CONNECT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
<!-- // Server given PORT pe start hota hai.
// Start hone ke baad database connect hota hai connectDB() function se. -->
