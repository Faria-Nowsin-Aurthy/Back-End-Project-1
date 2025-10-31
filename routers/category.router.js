import express from "express";
import { 
  getCategories, 
  getCategory, 
  createCategory, 
  updateCategory, 
  deleteCategory 
} from "../controllers/category.controller.js";

const router = express.Router();

// CRUD routes
router.get("/", getCategories);         // GET /api/categories
router.get("/:id", getCategory);        // GET /api/categories/:id
router.post("/", createCategory);       // POST /api/categories
router.put("/:id", updateCategory);     // PUT /api/categories/:id
router.delete("/:id", deleteCategory);  // DELETE /api/categories/:id

export default router;



// © Made by Faria Nowsin Aurthy. All rights reserved.