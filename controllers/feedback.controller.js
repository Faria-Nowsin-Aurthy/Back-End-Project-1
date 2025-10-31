import Feedback from "../models/feedback.model.js";
import { z } from "zod";

// Validation schema using Zod
const feedbackValidator = z.object({
  user: z.string().length(24, "Invalid user ID"),  // MongoDB ObjectId length
  message: z.string().min(5, "Message too short").max(500, "Message too long"),
  rating: z.number().int().min(1).max(5).optional(),
  isReviewed: z.boolean().optional(),
});

// Create feedback
export const createFeedback = async (req, res) => {
  try {
    const parsedData = feedbackValidator.parse(req.body);

    const newFeedback = await Feedback.create(parsedData);

    res.status(201).json(newFeedback);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ message: "Error creating feedback", error: error.message });
  }
};

// Get all feedbacks (optional: add pagination or filtering later)
export const getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate("user", "name email");
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching feedbacks", error: error.message });
  }
};

// Get single feedback by ID
export const getFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id).populate("user", "name email");
    if (!feedback) return res.status(404).json({ message: "Feedback not found" });

    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ message: "Error fetching feedback", error: error.message });
  }
};

// Update feedback by ID
export const updateFeedback = async (req, res) => {
  try {
    const parsedData = feedbackValidator.partial().parse(req.body);

    const updatedFeedback = await Feedback.findByIdAndUpdate(req.params.id, parsedData, { new: true });
    if (!updatedFeedback) return res.status(404).json({ message: "Feedback not found" });

    res.status(200).json(updatedFeedback);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ message: "Error updating feedback", error: error.message });
  }
};

// Delete feedback by ID
export const deleteFeedback = async (req, res) => {
  try {
    const deletedFeedback = await Feedback.findByIdAndDelete(req.params.id);
    if (!deletedFeedback) return res.status(404).json({ message: "Feedback not found" });

    res.status(200).json({ message: "Feedback deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting feedback", error: error.message });
  }
};


// © Made by Faria Nowsin Aurthy. All rights reserved.