import mongoose, { mongo } from "mongoose";

// define Schema

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    productImage: {
      //  To reduce DB load we will uplod image in cloudStorage and use Url
      type: String,
    },
    stock: {
      default: 0,
      type: Number,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

// export Schemas

export const Product = mongoose.model("Product", productSchema);
