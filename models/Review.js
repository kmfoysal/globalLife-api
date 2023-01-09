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
    name: {
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
      default: 0,
    },
    profilePic: {
      type: String,
      default: "",
    },
    aggrement: {
      type: Boolean,
      default: false,
    },
    replyReview: [
      {
        replyDesc: String,
        default: ''
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Review", ReviewSchema);
