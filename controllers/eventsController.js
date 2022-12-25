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

    let { page, limit, sort, asc } = req.query;

    // if (!page) page = 1;
    // if (!limit) limit = 2;

    // const skip = (page - 1) * 4;

    try {
        const events = await Event.find()
          .sort({ [sort]: asc })
          .limit(limit);
        res.status(200).json({ page, limit, events });
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

// Update Event Post 

export const updateEvent = async (req, res, next) => {

    try {
        const event = await Event.findById(req.params.id)

        if (event.userId === req.body.userId) {
          try {
            const updatedEvent = await Event.findByIdAndUpdate(
              req.params.id,
              { $set: req.body },
              { new: true }
            );
            res.status(200).json(updatedEvent);
          } catch (err) {
            next(err);
          }
        } else {
          res.status(401).json("You can update only your post!");
        }
        
    } catch (err) {
        next(err)
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

        console.log(req.body);

        if (!post.followers.includes(req.body.userId)) {
            await post.updateOne({ $push: { followers: req.body.userId } }, { new: true });
            res.status(200).json("The post has been follow");
        } else {
            await post.updateOne({ $pull: { followers: req.body.userId } }, { new: true });
            res.status(200).json("The post has been unfollow");
        }
    } catch (err) {
        next(err);
    }
};

//Total Post Views

export const viewEvents = async (req, res, next) => {
    try {

        const post = await Event.findById(req.params.id);

        
            await post.updateOne(
              { $inc: { views: 1 } },
              { new: true }
            );
            res.status(200).json("The post has been follow");
       
    } catch (err) {
        next(err);
    }
};
