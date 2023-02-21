import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    refreshToken: {
      type: String,
    },
    isTutor: {
      type: Boolean,
      require: true,
      default: false,
    }
  },
  {
    timestamps: true
  }
);

const user = mongoose.model("User", userSchema);

export default user;