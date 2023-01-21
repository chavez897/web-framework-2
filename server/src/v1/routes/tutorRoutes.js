import express from "express";
import {
  getTutors,
  createNewTutor,
} from "../../controllers/tutorController.js";
import { postManyTutors } from "../../controllers/populateDBController.js";
import { registerUser } from "../../controllers/registerController.js";

import apicache from "apicache";

const router = express.Router();

const cache = apicache.middleware;

router
  .get("/", cache("2 minutes"), getTutors)
  .post("/postoffer", createNewTutor);

export default router;
