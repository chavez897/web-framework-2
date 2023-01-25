import userSchema from "../database/models/userModel.js";
export const logoutService = async (refreshToken) => {
  //Check if the refresh token exist in the DB
  const userExists = await userSchema.findOne({ refreshToken });

  if (!userExists) {
    console.log("Refresh token does not exist in the DB");
    return;
  }
  //If it does, delete it from the DB
  await userSchema.findOneAndUpdate(
    { refreshToken },
    { refreshToken: null },
    { new: true }
  );

  console.log("Token found and deleted");
};
