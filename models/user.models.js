import mongoose from "mongoose"; // two way 1. import 2. const require format

// defined userSchema
const userSchema = new mongoose.Schema(
  {
    userName: {
      required: true,
      type: String,
    },
    email: {
      type: String,
      required: true,
      toLowerCase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
); // timestamps created at and updated at helps to get created and updated time.

export const User = mongoose.model("User", userSchema); // User defined here will be accessed on db as "users" always plural.
