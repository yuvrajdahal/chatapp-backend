import mongoose from "mongoose";

const connectDb = async () => {
  let url = process.env.MONGO_URL;
  const conn = await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`Mongoose Connected at: ${conn.connection.host}`);
};

export default connectDb;
