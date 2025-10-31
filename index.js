import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//  Import Routers
import userRoutes from "./routers/user.router.js";
import categoryRoutes from "./routers/category.router.js";
import productRoutes from "./routers/product.router.js";
import orderRoutes from "./routers/order.router.js";
import cartRoutes from "./routers/cart.router.js";
import feedbackRoutes from "./routers/feedback.router.js";

//  Load environment variables first
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

//  Middleware
app.use(express.json());

//  Test route
app.get("/", (req, res) => {
  res.send("✅ Backend is Running!");
});

//  Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully."))
  .catch((error) => console.error("MongoDB Connection Error:", error));

//  Register API routes
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/feedback", feedbackRoutes);

//  Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// © Made by Faria Nowsin Aurthy. All rights reserved.