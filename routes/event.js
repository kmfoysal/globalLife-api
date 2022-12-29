import express from "express";
import { allEvents, createEvent, deleteEvent, followEvents, getByCategory, getSingleEvent, myEvents, updateEvent, viewEvents } from "../controllers/eventsController.js";
;

const router = express.Router();

// Create Event 
router.post("/createevent", createEvent);

// Update Event
router.put("/allevents/:id", updateEvent);

// Delete Event
router.delete("/allevents/:id", deleteEvent);

//GET ALL Events
router.get("/allevents", allEvents);

//GET A Single Event
router.get("/allevents/:id", getSingleEvent);

//GET Current user Events
router.get("/myevents/:username", myEvents);

//GET Events By Category
router.get("/allevents/category/:categoryName", getByCategory);

//Follow the Events
router.put("/allevents/:id/follow", followEvents);

//Total events view
router.put("/allevents/:id/views", viewEvents);

export default router;

