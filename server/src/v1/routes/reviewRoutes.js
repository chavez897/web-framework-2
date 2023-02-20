import express from "express";

import {
  getReviews,
  createNewReview,
  updateReview,
  deleteReview,
  getReviewsById,
  getReviewsByTutorId,
} from "../../controllers/reviewController.js";

const router = express.Router();

router
  .get("/", getReviews)
  .get("/:id", getReviewsById)
  .get("/tutor/:id", getReviewsByTutorId)
  .post("/", createNewReview)
  .patch("/:id", updateReview)
  .delete("/:id", deleteReview);

export default router;