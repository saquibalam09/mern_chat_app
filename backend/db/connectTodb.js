import mongoose from "mongoose";

const connectTodb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URI);
    if (connection) {
      console.log(`Connected to MongoDB: ${connection.host}`);
    }
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

export default connectTodb;
