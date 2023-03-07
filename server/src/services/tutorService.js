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

export const getTutorByUserService = async (id) => {
  const tutor = await Tutor.findOne({
    userId: id,
  });

  return tutor;
};

export const updateTutorService = async (
  id,
  name,
  email,
  skills,
  spokenLanguages,
  hourlyRate,
  description
) => {
  try {
    const user = Tutor.findOneAndUpdate(
      { _id: id },
      {
        name: name,
        email: email,
        skills: skills,
        spokenLanguages: spokenLanguages,
        hourlyRate: hourlyRate,
        description: description,
      },
      { new: true }
    );
    if (user) {
      return user;
    }
  } catch (error) {
    console.log("service");
    throw new Error(error.message);
  }
};
