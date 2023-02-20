import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "User",
  },
  tutorId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "Tutor",
  },
  rating: {
    type: Number,
    require: true,
    default: 0,
  },
  review: {
    type: String,
    require: true,
  }
},{
  timestamps:true
});

const tutorSchema = new mongoose.Schema(
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
    timestamps: true
  },
  {
    toJSON: { virtuals: true }, 
    toObject: { virtuals: true }
  },
);

tutorSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "tutorId",
});

tutorSchema.virtual("numReviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "tutorId",
  count: true
});

const Tutor = mongoose.model("Tutor", tutorSchema);
const Review = mongoose.model("Review", reviewSchema);

export default Tutor;
export { Review };
