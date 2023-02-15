import express from "express";

import {
  getAllContents,
  createContent,
  getContentById,
  updateContent,
  deleteContent,
} from "../../controllers/contentController.js";

const router = express.Router();

router
  .get("/", getAllContents)
  .post("/", createContent)
  .get("/:id", getContentById)
  .put("/:id", updateContent)
  .delete("/:id", deleteContent);

export default router;
