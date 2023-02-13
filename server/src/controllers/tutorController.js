import {
  getTutorsService,
  createNewTutorService,
} from "../services/tutorService.js";

export const getTutors = async (req, res) => {
  try {
    const { skill } = req.query;
    res.status(200).json(await getTutorsService(skill));
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};  

export const createNewTutor = async (req, res) => {
  try {
    //TODO: check request validity using Express Validator. It is already installed.
    res.status(201).json(await createNewTutorService(req.body));
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
