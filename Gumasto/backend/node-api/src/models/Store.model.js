import mongoose from "mongoose";

const storeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("Store", storeSchema);
