import mongoose from "mongoose";

// define Schema

const categorySchema = new mongoose.Schema(
  {
    // We need only one field here which will contain name of all category
    name: {
      type: String,
      required: true,
    },

    isAvailable: {
      default: true,
    },
  },
  { timestamps: true }
);

// export Schemas

export const Category = mongoose.model("Category", categorySchema);
