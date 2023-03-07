import Tutor from "../database/models/tutorModel.js";

export const getTutorsService = async (skill) => {
  const tutors = await Tutor.find({
    skills: { $regex: skill, $options: "i" },
  }).sort({ hourlyCost: 1 });
  return tutors;
};
export const createNewTutorService = async (data) => {
  tutor = await new Tutor(data).save();
  return tutor;
};

export const getTutorService = async (id) => {
  const tutor = await Tutor.findOne({ _id: id });
  return tutor;
};
