import mongoose from "mongoose";

// define Schema

const productSchema = new mongoose.Schema({}, { timestamps: true });

// export Schemas

export const Product = mongoose.model("Product", productSchema);
