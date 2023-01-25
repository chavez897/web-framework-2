import express from "express";
import { loginUser } from "../../controllers/authController.js";
import { registerUser } from "../../controllers/registerUserController.js";
import { refreshToken } from "../../controllers/refreshTokenController.js";
import { handleLogout } from "../../controllers/logOutController.js";

const router = express.Router();

router
  .post("/login", loginUser)
  .post("/register", registerUser)
  .get("/refresh", refreshToken)
  .get("/logout", handleLogout);

export default router;
