import userSchema from "../database/models/userModel.js";
import bcrypt from "bcrypt";

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

  return userExists;
};
