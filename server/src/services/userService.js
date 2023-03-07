import User from "../database/models/userModel.js";

export const getUserService = async (id) => {
  const tutor = await User.findOne({ _id: id });
  return tutor;
};
