import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
    default: 0,
  },
  comment: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "User",
  },
});

const teacherFilterSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    picture: String,
    image: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    spokenLanguages: {
      type: [{ type: String }],
      require: true,
    },
    skills: [{ type: String }],
    reviews: [reviewSchema],
    rating: {
      type: Number,
      require: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      require: true,
      default: 0,
    },
    lessonCost: {
      type: Number,
      require: true,
      default: 0,
    },
    countClasesGiven: {
      type: Number,
      require: true,
      default: 0,
    },
  },
  {
    timestamp: true,
  }
);

const teacherFilter = mongoose.model("TeacherFilter", teacherFilterSchema);

export default teacherFilter;
