import dotenv from "dotenv"
dotenv.config()

export const environmentVariables = {
  port: process.env.Port!,
  MONGODB_STRING: process.env.MONGODB_STRING!,
};