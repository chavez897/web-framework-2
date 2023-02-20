import {
  getReviewsService,
  createNewReviewService,
  updateReviewService,
  deleteReviewService,
  getReviewsByIdService,
  getReviewsByTutorIdService,
} from "../services/reviewService.js";

import { check, validationResult } from "express-validator";

export const getReviews = async (req, res) => {
  try {
    res.status(200).json(await getReviewsService());
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getReviewsById = async (req, res) => {
  try {
    let id = req.params.id;
    res.status(200).json(await getReviewsByIdService(id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getReviewsByTutorId = async (req, res) => {
  try {
    const tutorId = req.params.id;
    res.status(200).json(await getReviewsByTutorIdService(tutorId));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createNewReview = async (req, res) => {
  try {
    // Validate the request using Express Validator
    await Promise.all([
      check("rating")
        .exists()
        .bail()
        .isFloat({ min: 1, max: 5 })
        .withMessage("Rating must be between 1 and 5")
        .run(req),
      check("review")
        .exists()
        .bail()
        .notEmpty()
        .withMessage("Review must not be empty")
        .isString()
        .withMessage("Review must be a string")
        .run(req),
    ]);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let data = req.body;
    res.status(201).json(await createNewReviewService(data));
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateReview = async (req, res) => {
  try {
    // Validate the request using Express Validator
    await Promise.all([
      check("rating")
        .exists()
        .bail()
        .isFloat({ min: 1, max: 5 })
        .withMessage("Rating must be between 1 and 5")
        .run(req),
      check("review")
        .exists()
        .bail()
        .notEmpty()
        .withMessage("Review must not be empty")
        .isString()
        .withMessage("Review must be a string")
        .run(req),
    ]);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let id = req.params.id;
    let data = req.body;
    res.status(200).json(await updateReviewService(id, data));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    let id = req.params.id;
    res.status(200).send(await deleteReviewService(id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
