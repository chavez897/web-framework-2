import mongoose from "mongoose";
import roles from "../../config/rolesList.js";

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
    lastName: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
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
    },
    roles: {
      User: {
        type: Number,
        default: roles.user,
      },
      Tutor: Number,
      Admin: Number,
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("User", userSchema);

export default user;
