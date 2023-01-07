import express from "express";
import { addReview, getReviews } from "../controllers/reviewController.js";

const router = express.Router();

// Create Review
router.post("/addReview", addReview);

// Get Reviews
router.get("/:postId", getReviews);

export default router;
