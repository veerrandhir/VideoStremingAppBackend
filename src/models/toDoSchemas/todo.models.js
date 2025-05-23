import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.type.objectId,
      ref: "User", // the refernce should alway form  Export Model i.e, "export const User = mongoose.model("User", userSchema)"
    },
    subTodos: [
      {
        type: mongoose.Schema.type.objectId,
        ref: "subTodo",
      },
    ], // Arrys of subtodos
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
