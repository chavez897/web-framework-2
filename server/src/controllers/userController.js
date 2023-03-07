import { getUserService } from "../services/userService.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.query;
    res.status(200).json(await getUserService(id));
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
