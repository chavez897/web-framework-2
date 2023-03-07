import express from "express";
import {
  getTutors,
  createNewTutor,
  getTutor,
} from "../../controllers/tutorController.js";

import { verifyJWT } from "../../middlewares/verifyJWT.js";

import apicache from "apicache";

const router = express.Router();

const cache = apicache.middleware;

router
  .get("/", cache("2 minutes"), getTutors)
  .get("/byId", getTutor)
  //TODO: Add the verifyJWT middleware to the post route once the createNewTutor controller is ready
  // .post("/", verifyJWT, createNewTutor);
  .post("/", createNewTutor);

export default router;
