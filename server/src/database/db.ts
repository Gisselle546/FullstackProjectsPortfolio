import mongoose from "mongoose";

const uri: string = process.env.MONGO_URI!;

const connect_to_db = async () => {
  return mongoose.connect(uri, {
    dbName: process.env.DB_NAME,
  });
};

mongoose.set("strictQuery", false);

export { connect_to_db };
