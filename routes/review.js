import express from "express";
import { addReview } from "../controllers/reviewController.js";

const router = express.Router();

// Create Event
router.post("/addReview", addReview);

export default router;
