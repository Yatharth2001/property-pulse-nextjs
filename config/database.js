import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  //if dababase is already connected, don't connect again

  if (connected) {
    console.log("MongoDbb is already connected");
    return;
  }
  //connect to MongoDB

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
