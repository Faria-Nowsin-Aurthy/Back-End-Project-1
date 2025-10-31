import express from "express";
import { createFeedback, getFeedbacks, getFeedback, updateFeedback, deleteFeedback } from "../controllers/feedback.controller.js";

const router = express.Router();

// CRUD routes
router.post("/", createFeedback);          // POST /api/feedback
router.get("/", getFeedbacks);             // GET /api/feedback
router.get("/:id", getFeedback);           // GET /api/feedback/:id
router.put("/:id", updateFeedback);        // PUT /api/feedback/:id
router.delete("/:id", deleteFeedback);     // DELETE /api/feedback/:id

export default router;



// © Made by Faria Nowsin Aurthy. All rights reserved.