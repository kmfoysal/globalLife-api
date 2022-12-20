import User from "../models/user.js";
import Event from "../models/Event.js";


// Create or Post a Event 
export const createEvent = async (req, res, next) => {
    try {

        const newEvent = new Event(req.body);

        const saveEvent = await newEvent.save();

        res.status(200).json(saveEvent);

    } catch (err) {
        next(err);
    }
};


// Get All Events 
export const allEvents = async (req, res, next) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (err) {
        next(err);
    }
};

// Get Current User Events 
export const myEvents = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        const events = await Event.find({ userId: user._id });
        res.status(200).json(events);
    } catch (err) {
        next(err);
    }
};



export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedUser);
    } catch (err) {
        next(err);
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
    } catch (err) {
        next(err);
    }
};

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

