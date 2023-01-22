import { registerUserService } from "../services/registerUserService.js";

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
