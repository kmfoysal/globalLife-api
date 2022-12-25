import express from "express";
import { allEvents, createEvent, followEvents, myEvents, updateEvent, viewEvents } from "../controllers/eventsController.js";
;

const router = express.Router();

// Create Event 
router.post("/createevent", createEvent);

// Update Event
router.put("/allevents/:id", updateEvent);

//GET ALL Events
router.get("/allevents", allEvents);

//GET Current user Events
router.get("/allevents/:username", myEvents);

//Follow the Events
router.put("/allevents/:id/follow", followEvents);

//Total events view
router.put("/allevents/:id/views", viewEvents);

export default router;
