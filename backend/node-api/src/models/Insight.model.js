import mongoose from "mongoose";

const insightSchema = new mongoose.Schema(
  {
    store: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true },
    product_ids: [{ type: String, required: true }],
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    metrics: { type: Object, required: true },
    message: { type: String },
    confidence: { type: Number, default: 0 },
  },
  { timestamps: true }
);

insightSchema.index({ store: 1, start_date: 1, end_date: 1 }, { unique: true });

export default mongoose.model("Insight", insightSchema);
