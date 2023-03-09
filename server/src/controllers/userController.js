import { getUserService, updateUserService } from "../services/userService.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.query;
    res.status(200).json(await getUserService(id));
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { name, lastName, phone, email } = req.body;
  if (!name || !lastName || !phone || !email) {
    res.status(400).json({ message: "Missing fields" });
    return;
  }
  try {
    console.log("controller");
    const user = await updateUserService(email, name, lastName, phone);
    if (user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        lastName: user.lastName,
      });
    }
  } catch (error) {
    res.status(503).json({ message: error.message });
  }
};
