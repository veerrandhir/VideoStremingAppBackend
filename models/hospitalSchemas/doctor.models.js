import mongoose, { Schema } from "mongoose";

// define schemas

const doctorSchema = new mongoose.Schema(
  {
    doctor: {
      type: "String",
      required: true,
    },
    salary: {
      type: "String",
      required: true,
    },
    department: {
      type: [],
      required: true,
    },
    workingHour: {
      type: String,
      required: true,
    },
    IsAvailale: {
      required: true,
      default: true,
    },
    Qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: String,
      default: 0,
    },
    Rating: {
      default: 0,
    },
    worksInHospitals: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
    ],
  },
  { timestamps: true }
);

export const doctor = mongoose.model("doctor", doctorSchema);
