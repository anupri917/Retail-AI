import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/insight", async (req, res) => {
  try {
    const aiResponse = await axios.post(
      "http://localhost:8000/ai/insight", // FastAPI
      req.body,
      { timeout: 60000 }
    );

    res.json(aiResponse.data);
  } catch (error) {
    console.error("AI SERVICE ERROR:", error.message);
    res.status(500).json({
      error: "AI service failed",
      details: error.message
    });
  }
});

export default router;
