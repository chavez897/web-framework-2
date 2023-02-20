import { Review } from "../database/models/tutorModel.js";
import Tutor from "../database/models/tutorModel.js";

export const getReviewsService = async () => {
  const reviews = await Review.find({});
  return reviews;
};

export const getReviewsByIdService = async (id) => {
  const reviews = await Review.find({ _id: id });
  return reviews;
};

export const getReviewsByTutorIdService = async (tutorId) => {
  const tutor = await Tutor.findOne({ _id: tutorId })
    .populate({
      path: "reviews",
      populate: {
        path: "userId",
        select: "userId name",
      },
    })
    .exec();

  // Getting count of reviews
  const doc = await Tutor.findOne({ _id: tutorId })
    .populate({ path: "numReviews" })
    .exec();

  if (!tutor) {
    return "Not found";
  }

  const reviews = {
    tutorId: tutor._id,
    userName: tutor.reviews[0].userId.name,
    numReviews: doc.numReviews,
    reviews: tutor.reviews.map(review => {
      return {
        id: review._id,
        rating: review.rating,
        review: review.review,
        createdAt: review.createdAt,
        updatedAt: review.updatedAt
      };
    })
  };

  return reviews;
};

export const createNewReviewService = async (data) => {
  const review = await new Review(data).save();
  return review;
};

export const updateReviewService = async (_id, data) => {
  const review = await Review.findByIdAndUpdate(_id, data, { new: true });
  return review;
};

export const deleteReviewService = async (_id) => {
  await Review.findByIdAndDelete(_id);
  return "Deleted successfully";
};
