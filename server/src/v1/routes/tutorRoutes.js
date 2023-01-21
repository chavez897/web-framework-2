import express from "express";
import {
  getTutors,
  createNewTutor,
} from "../../controllers/tutorController.js";

import apicache from "apicache";

const router = express.Router();

const cache = apicache.middleware;

router.get("/", cache("2 minutes"), getTutors).post("/", createNewTutor);

export default router;
