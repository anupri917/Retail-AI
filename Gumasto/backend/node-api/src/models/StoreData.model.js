import mongoose from "mongoose";

const storeDataSchema = new mongoose.Schema({
  store_id: String,
  product_id: String,
  date: Date,
  sales: Number,
  inventory: Number,
  waste: Number
}, { timestamps: true });

export default mongoose.model("StoreData", storeDataSchema);
