import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      unique: true,
      required: true,
    },
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
    skills: {
      type: [{ type: String }],
      require: true,
    },
    hourlyRate: {
      type: Number,
      require: true,
      default: 0,
    },
    currency: {
      type: String,
      require: true,
    },
    classesGiven: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
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
  count: true,
});

const Tutor = mongoose.model("Tutor", tutorSchema);
export default Tutor;
