import mongoose from "mongoose";
import dotenv from "dotenv";
import { environmentVariables } from "./enviroVariables";
dotenv.config();

const mongooseString: string = environmentVariables.MONGODB_STRING!

export const dbConnect = () => {
  mongoose.connect(mongooseString).then(() => {
    console.log("connection has been established");
  });
};
