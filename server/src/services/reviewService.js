import { Review } from "../database/models/tutorModel.js";

export const getReviewsService = async () => {
  const reviews = await Review.find({});
  return reviews;
};

export const createNewReviewService = async (data) => {
  const review = await new Review(data).save();
  return review;
};

export const updateReviewService = async (_id, data) => {
  const review=await Review.findByIdAndUpdate(_id,data,{new:true});
  return review
};

export const deleteReviewService = async (_id) => {
  await Review.findByIdAndDelete(_id);
  return "Deleted successfully"
};