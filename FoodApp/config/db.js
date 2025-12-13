import mongoose from "mongoose";
import colors from "colors";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected To Database ${mongoose.connection.host}`.bgWhite);
  } catch (error) {
    console.log("DB Error", error);
  }
};

export default connectDb;
