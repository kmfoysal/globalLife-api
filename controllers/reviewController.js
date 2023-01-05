import Review from "../models/Review.js";
import User from "../models/user.js";

// Create or Post a Event
export const addReview = async (req, res, next) => {
  try {
    const newReview = new Review({
      ...req.body,
    //   followers: [],
    });

    const saveReview = await newReview.save();

    res.status(200).json(saveReview);
  } catch (err) {
    next(err);
  }
};