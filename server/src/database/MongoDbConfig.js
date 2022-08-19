import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDb;
