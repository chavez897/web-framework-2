import {
  registerUserService,
  handleLoginService,
} from "../services/authService.js";

export const registerUser = async (req, res) => {
  console.log("registerUser initiated");
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    console.log("Missing fields");
    res.status(400).json({ message: "Missing fields" });
    return;
  }
  try {
    const user = await registerUserService(name, email, password);
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    }
  } catch (error) {
    if (error.message === "User already exists") {
      res.status(409).json({ message: error.message });
    } else {
      res.status(503).json({ message: error.message });
    }
  }
};

export const loginUser = async (req, res) => {
  console.log("loginUser initiated");
  const { email, password } = req.body;
  if (!email || !password) {
    console.log("Missing fields");
    res.status(400).json({ message: "Missing fields" });
    return;
  }
  try {
    const [refreshToken, accessToken] = await handleLoginService(
      email,
      password
    );
    if (refreshToken) {
      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24,
      });
      res.status(200).json({ accessToken });
    }
  } catch (error) {
    if (error.message === "Not valid credentials") {
      res.sendStatus(401);
    } else {
      res.status(503).json({ message: error.message });
    }
  }
};
