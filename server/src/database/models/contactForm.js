import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    language: {
      type: String,
      require: true,
    },
    skill: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    user: {
      type: String,
      require: true,
    },
    tutor: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamp: true,
  }
);

const user = mongoose.model("Contact", contactSchema);

export default user;
