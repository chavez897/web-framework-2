import express from "express";
import { getUser, updateUser } from "../../controllers/userController.js";

import { verifyJWT } from "../../middlewares/verifyJWT.js";

const router = express.Router();

router.get("/byId", getUser).put("/", updateUser);

export default router;
