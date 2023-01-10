import Review from "../models/Review.js";

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


// Get Reviews

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ postId: req.params.postId });
    res.status(200).json(reviews);
  } catch (err) {
    next(err);
  }
};

// Reply Review / update
export const replyReview = async (req, res, next) => {

  const { reviewId, replyerName, replyTime, replyDesc } = req.body;

  // console.log(username, replyName, replyTime, replyDesc);

  // try {
    const review = await Review.findById(req.params.reviewId);

    // if (review.username === req.body.username) {
      try {
        const replyReview = await review.updateOne(
            {
                $push: {
                    replyReview: {
                        reviewId: reviewId,
                        replyerName:replyerName,
                        replyTime: replyTime,
                        replyDesc: replyDesc,
                    },
                },
            },
            { new: true }
        );
        res.status(200).json(replyReview);
      } catch (err) {
        next(err);
      }
  //   } else {
  //     res.status(401).json("You can Reply only your post!");
  //   }
  // } catch (err) {
  //   next(err);
  // }
};
