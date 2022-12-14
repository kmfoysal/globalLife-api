import express from "express";
import { allEvents, createEvent } from "../controllers/eventsController.js";
;

const router = express.Router();

// Create Route 
router.post("/createevent", createEvent);

//GET ALL Events
router.get("/allevents", allEvents);

export default router;
