import express from "express";
import { postManyTutors } from "../../controllers/populateDBController.js";

const router = express.Router();

router.get("/", postManyTutors);

export default router;
