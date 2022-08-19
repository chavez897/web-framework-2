import teacherFilterModel from "../database/models/tutorModel.js";

export const getTutorsService = async (skill) => {
  // const tutors = await teacherFilterModel.find({ skills: skill });
  const tutors = await teacherFilterModel.find({
    skills: { $regex: skill, $options: "i" },
  });
  return tutors;
};
export const createNewTutorService = async (tutor) => {
  tutor = await new teacherFilterModel(tutor).save();
  return tutor;
};
