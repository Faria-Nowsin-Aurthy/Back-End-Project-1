import Category from "../models/category.model.js";
import { z } from "zod";

// --- Zod validation schemas ---
const createCategoryValidator = z.object({
  name: z.string().min(2, "Category name is too short"),
  description: z.string().optional(),
  isActive: z.boolean().optional(),
});

const updateCategoryValidator = createCategoryValidator.partial();

// --- Controller functions ---

// Get all categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories", error: error.message });
  }
};

// Get a single category by ID
export const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error fetching category", error: error.message });
  }
};

// Create new category
export const createCategory = async (req, res) => {
  try {
    const parsedData = createCategoryValidator.parse(req.body);

    // Check if category name already exists
    const existing = await Category.findOne({ name: parsedData.name });
    if (existing) return res.status(400).json({ message: "Category name already exists" });

    const newCategory = await Category.create(parsedData);
    res.status(201).json(newCategory);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ message: "Error creating category", error: error.message });
  }
};

// Update category
export const updateCategory = async (req, res) => {
  try {
    const parsedData = updateCategoryValidator.parse(req.body);
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, parsedData, { new: true });
    if (!updatedCategory) return res.status(404).json({ message: "Category not found" });

    res.status(200).json(updatedCategory);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ message: "Error updating category", error: error.message });
  }
};

// Delete category
export const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) return res.status(404).json({ message: "Category not found" });

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting category", error: error.message });
  }
};


// © Made by Faria Nowsin Aurthy. All rights reserved.