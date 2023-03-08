import { handleLoginService } from "../services/authService.js";

export const loginUser = async (req, res) => {
  console.log("loginUser initiated");
  const { email, password } = req.body;
  if (!email || !password) {
    console.log("Missing fields");
    res.status(400).json({ message: "Missing fields" });
    return;
  }
  try {
    const [refreshToken, accessToken, roles] = await handleLoginService(
      email,
      password
    );
    if (refreshToken) {
      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        maxAge: process.env.REFRESH_TOKEN_COOKIE_MAX_AGE,
      });
      res.status(200).json({ accessToken, roles });
    }
  } catch (error) {
    if (error.message === "Not valid credentials") {
      res.sendStatus(401);
    } else {
      res.status(503).json({ message: error.message });
    }
  }
};
