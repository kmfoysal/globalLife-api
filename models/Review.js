import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    postId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    reviewDesc: {
      type: String,
      required: true,
    },
    reviewTitle: {
      type: String,
    },
    rating: {
      type: Number,
    },
    profilePic: {
      type: String,
      default: "",
    },
    replyReview: [
      {
        username: {
          type: String,
          required: true,
        },
        replyDesc: {
          type: String,
          required: true,
        },
        replyDate: new Date()
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Review", ReviewSchema);