import Insight from "../models/Insight.model.js";
import { getInsight } from "../services/pythonAI.service.js";

export const generateInsight = async (req, res) => {
  try {
    const { store_id, product_ids, start_date, end_date, metrics } = req.body;

    // 1️⃣ Check cache
    const existing = await Insight.findOne({
      store: store_id,
      product_ids,
      start_date: new Date(start_date),
      end_date: new Date(end_date)
    });

    if (existing) {
      return res.status(200).json({
        message: "Insight fetched from cache",
        insight: existing
      });
    }

    // 2️⃣ Call Python AI service
    const aiResponse = await getInsight(req.body);

    // 3️⃣ Save new insight to MongoDB
    const insight = await Insight.create({
      store: store_id,
      product_ids,
      start_date: new Date(start_date),
      end_date: new Date(end_date),
      metrics,
      message: aiResponse.message,
      confidence: aiResponse.confidence,
      explanation: aiResponse.explanation || ""
    });

    // 4️⃣ Respond to frontend
    res.status(200).json({
      message: "Insight generated successfully",
      insight
    });

  } catch (error) {
    console.error("AI Controller Error:", error);
    res.status(500).json({ message: error.message });
  }
};
