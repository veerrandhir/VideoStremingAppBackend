import mongoose from "mongoose";

// define Schema

const hospitalModelSchema = new mongoose.Schema(
  {
    Name: {
      type: [],
      required: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    specilizedIn: [
      {
        type: String,
        //   required: true,
      },
    ],
    OPD_hour: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", hospitalModelSchema);
