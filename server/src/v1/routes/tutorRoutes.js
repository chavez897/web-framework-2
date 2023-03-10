import express from "express";
import {
  getTutors,
  createNewTutor,
  getTutor,
  getByUser,
  updateTutor,
  updateImage,
  getTutorById,
} from "../../controllers/tutorController.js";
import { verifyJWT } from "../../middlewares/verifyJWT.js";
import apicache from "apicache";
import verifyRoles from "../../middlewares/verifyRoles.js";
import ROLES from "../../config/rolesList.js";
const router = express.Router();

const cache = apicache.middleware;

router
  .get("/", verifyJWT, verifyRoles(ROLES.user), cache("2 minutes"), getTutors)
  .get(
    "/testAuth",
    verifyJWT,
    verifyRoles(ROLES.user, ROLES.admin),
    (req, res) => res.send("You are authenticated!")
  )
  .get("/byId", getTutor)
  .get("/byUser", getByUser)
  .put("/", updateTutor)
  .put("/image", updateImage)
  .get("/:id", getTutorById)
  //TODO: Add the verifyJWT middleware to the post route once the createNewTutor controller is ready
  // .post("/", verifyJWT, createNewTutor);
  .post("/",createNewTutor);

export default router;
