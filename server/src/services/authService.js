import userSchema from "../database/models/userModel.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

export const registerUserService = async (name, email, password) => {
  const userExists = await userSchema.findOne({ email });
  if (userExists) {
    console.log("userExists", userExists);
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await userSchema.create({
      name,
      email,
      password: hashedPassword,
      timestamp: true,
    });
    if (user) {
      return user;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const handleLoginService = async (email, password) => {
  const userExists = await userSchema.findOne({ email });
  if (!userExists) {
    console.log("Not valid email");
    throw new Error("Not valid credentials");
  }

  const match = await bcrypt.compare(password, userExists.password);

  if (!match) {
    console.log("Not valid password");
    throw new Error("Not valid credentials");
  }
  //Generate access token
  const accessToken = jwt.sign(
    { email: userExists.email },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "60s",
    }
  );
  //Generate refresh token
  const refreshToken = jwt.sign(
    { email: userExists.email },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "24h",
    }
  );
  //Add refresh token to user document
  userSchema.findOneAndUpdate(
    { email },
    { $set: { refreshToken: refreshToken } },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log("Something wrong when updating data!");
        throw new Error(err.message);
      }
    }
  );

  return [refreshToken, accessToken];
};
