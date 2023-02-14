import mongoose from "mongoose";
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  title: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const content = mongoose.model("Content", contentSchema);

export default content;
