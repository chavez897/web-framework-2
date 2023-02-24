import userSchema from "../database/models/userModel.js";
import bcrypt from "bcrypt";
import roles from "../config/rolesList.js";
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
      roles: { User: roles.user },
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
