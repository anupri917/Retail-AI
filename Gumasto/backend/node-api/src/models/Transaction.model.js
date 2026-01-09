import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Store",
      required: true
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product"
        },
        quantity: Number
      }
    ],
    totalAmount: Number
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);
