import express from "express";

import {
  getReviews,
  createNewReview,
  updateReview,
  deleteReview,
} from "../../controllers/reviewController.js";

const router = express.Router();

router
  .get("/", getReviews)
  .post("/", createNewReview)
  .put("/:id", updateReview)
  .delete("/:id", deleteReview);

export default router;