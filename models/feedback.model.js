import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },
    message: {
      type: String,
      required: [true, "Feedback message is required"],
      trim: true,
      minlength: [5, "Feedback message must be at least 5 characters"],
      maxlength: [500, "Feedback message can't exceed 500 characters"]
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: false,  // Optional rating from 1 to 5
    },
    isReviewed: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);



// © Made by Faria Nowsin Aurthy. All rights reserved.