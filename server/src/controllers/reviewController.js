import {
  getReviewsService,
  createNewReviewService,
  updateReviewService,
  deleteReviewService,
} from "../services/reviewService.js";

export const getReviews = async (req, res) => {
  try {
    res.status(200).json(await getReviewsService());
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createNewReview = async (req, res) => {
  try {
    //! TODO: check request validity using Express Validator. It is already installed.
    let data=req.body
    res.status(201).json(await createNewReviewService(data));
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateReview = async (req, res) => {
  try {
    let id = req.params.id;
    let data = req.body;
    res.status(200).json(await updateReviewService(id, data));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    let id=req.params.id;
    res.status(200).send(await deleteReviewService(id))
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
