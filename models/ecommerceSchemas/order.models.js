import mongoose from "mongoose";

// define Schema

const orderSchema = new mongoose.Schema({}, { timestamps: true });

// export Schemas

export const Order = mongoose.model("Order", orderSchema);
