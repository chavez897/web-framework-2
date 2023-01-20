import { postManyTutorsService } from "../services/populateDBService.js";

export const postManyTutors = async (req, res) => {
  try {
    res.status(201).json(await postManyTutorsService());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
