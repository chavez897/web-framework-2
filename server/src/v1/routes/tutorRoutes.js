import express from "express";
import {
  getTutors,
  createNewTutor,
} from "../../controllers/tutorController.js";

import { postManyTutors } from "../../controllers/populateDB.js";
import apicache from "apicache";

const router = express.Router();

const cache = apicache.middleware;

router
  .get("/", cache("2 minutes"), getTutors)
  .post("/postoffer", createNewTutor)
  .get("/populateDB", postManyTutors);

export default router;
