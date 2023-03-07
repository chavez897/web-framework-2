import express from "express";
import { getUser } from "../../controllers/userController.js";

import { verifyJWT } from "../../middlewares/verifyJWT.js";

const router = express.Router();

router.get("/byId", getUser);

export default router;
