import teacherFilterModel from "../database/models/tutorModel.js";

export const getTutorsService = async (skill) => {
  console.log("hi there");
  const tutors = await teacherFilterModel
    .find({
      skills: { $regex: skill, $options: "i" },
    })
    .sort({ lessonCost: 1 });
  return tutors;
};
export const createNewTutorService = async (tutor) => {
  tutor = await new teacherFilterModel(tutor).save();
  return tutor;
};
