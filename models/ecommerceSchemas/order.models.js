import mongoose from "mongoose";

// define Schema

const orderItemSchema = new mongoose.Schema({
  // We need product Id and quantity to be added on cart to place order
  // locally defined orderItemSchema , quantity and  get product id
  producetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    address: {
      type: String,
      required: true,
    },
    orderItem: { type: [orderItemSchema] }, // user reference form orderItem Decleared above in the same model.
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Cancelled", "Delivered"], // Enum give option to choose form already given option.
      default: "Pending",
    },
  },
  { timestamps: true }
);

// export Schemas

export const Order = mongoose.model("Order", orderSchema);
