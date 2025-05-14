import mongoose from "mongoose";
import { useRef } from "react";

const subTodosSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.type.objectId,
      ref: "User", // the refernce should alway form  Export Model i.e, "export const User = mongoose.model("User", userSchema)"
    },
  },
  { timestamps: true }
);

export const subTodo = mongoose.model("subTodo", subTodosSchema);
