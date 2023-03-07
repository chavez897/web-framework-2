import Tutor from "../database/models/tutorModel.js";

export const getTutorsService = async (skill) => {
  const tutors = await Tutor.find({
    skills: { $regex: skill, $options: "i" },
  }).sort({ hourlyCost: 1 });
  return tutors;
};
export const createNewTutorService = async ({ profile, file }) => {
  let data = {
    userId: profile.userId,
    image: file,
    description: profile.description,
    spokenLanguages: profile.spokenLanguages,
    skills: profile.skills,
    hourlyRate: profile.hourlyRate,
    currency: profile.currency,
  };

  const tutor = await new Tutor(data).save();
  return tutor;
};

export const getTutorService = async (id) => {
  const tutor = await Tutor.findOne({ _id: id });
  return tutor;
};
