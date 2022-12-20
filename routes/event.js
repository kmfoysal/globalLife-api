import express from "express";
import { allEvents, createEvent, myEvents } from "../controllers/eventsController.js";
;

const router = express.Router();

// Create Route 
router.post("/createevent", createEvent);

//GET ALL Events
router.get("/allevents", allEvents);

//GET Current user Events
router.get("/allevents/:username", myEvents);

export default router;
