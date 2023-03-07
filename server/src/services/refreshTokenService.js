import userSchema from "../database/models/userModel.js";
import jwt from "jsonwebtoken";

//Return a new access token given a refresh token
export const refreshTokenService = async (refreshToken) => {
  console.log("refreshTokenService initiated");
  const { email } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
  if (!email) {
    console.log("There is no email in the refresh token");
    throw new Error("Not valid refresh token");
  }
  const user = await userSchema.findOne({ email });
  if (!user) {
    console.log("There is no user with that email");
    throw new Error("Not valid refresh token");
  }

  const accessToken = jwt.sign(
    {
      UserInfo: {
        email: user.email,
        roles: Object.values(user.roles),
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_LIFE }
  );
  return accessToken;
};
