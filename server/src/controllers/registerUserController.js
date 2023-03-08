import { registerUserService } from "../services/registerUserService.js";

export const registerUser = async (req, res) => {
  console.log("registerUser initiated");
  const { name, email, password, lastName, phone } = req.body;
  console.log(
    "name, email, password, lastName, phone",
    name,
    email,
    password,
    lastName,
    phone
  );
  if (!name || !email || !password || !lastName || !phone) {
    console.log("Missing fields");
    res.status(400).json({ message: "Missing fields" });
    return;
  }
  try {
    const user = await registerUserService(
      name,
      email,
      lastName,
      phone,
      password
    );
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        lastName: user.lastName,
        phone: user.phone,
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
