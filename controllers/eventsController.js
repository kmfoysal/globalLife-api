import Event from "../models/Event.js";
import User from "../models/user.js";

// Create or Post a Event
export const createEvent = async (req, res, next) => {
    try {
        const newEvent = new Event({
            ...req.body,
            followers: []
        });

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

//follow a Events

export const followEvents = async (req, res, next) => {
    try {

        const post = await Event.findById(req.params.id);

        if (!post.followers.includes(req.body.userId)) {
            await post.updateOne({ $push: { followers: req.body.userId } });
            res.status(200).json("The post has been follow");
        } else {
            await post.updateOne({ $pull: { followers: req.body.userId } });
            res.status(200).json("The post has been unfollow");
        }
    } catch (err) {
        next(err);
    }
};
