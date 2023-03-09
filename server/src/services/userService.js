import User from "../database/models/userModel.js";

export const getUserService = async (id) => {
  const tutor = await User.findOne({ _id: id });
  return tutor;
};

export const updateUserService = async (email, name, lastName, phone) => {
  try {
    const user = User.findOneAndUpdate(
      { email },
      {
        name: name,
        phone: phone,
        lastName: lastName,
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
