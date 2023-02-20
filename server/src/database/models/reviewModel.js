import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    tutorId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "Tutor",
    },
    rating: {
      type: Number,
      require: true,
      default: 0,
    },
    review: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);
export default Review;
