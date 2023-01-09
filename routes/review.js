import express from "express";
import { addReview, getReviews, replyReview } from "../controllers/reviewController.js";

const router = express.Router();

// Create Review
router.post("/addReview", addReview);

// Get Reviews
router.get("/:postId", getReviews);

// reply Reviews
router.put("/:reviewId/reply", replyReview);

export default router;
