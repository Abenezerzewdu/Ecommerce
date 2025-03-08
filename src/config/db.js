import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongDB Connected Successfully");
  } catch (error) {
    console.log("Error : " + error);
    process.exit(1);
  }
};
export default connectDB;
