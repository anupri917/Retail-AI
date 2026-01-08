import axios from "axios";

const PYTHON_AI_URL = process.env.PYTHON_AI_URL || "http://localhost:8000/ai";

export const getInsight = async (insightRequest) => {
  try {
    const response = await axios.post(`${PYTHON_AI_URL}/insight`, insightRequest, {
      timeout: 5000 // 5 seconds timeout
    });

    const data = response.data.insight;

    // Ensure all fields exist
    return {
      message: data.message || "No message",
      confidence: data.confidence ?? 0,
      explanation: data.explanation || ""
    };
  } catch (error) {
    console.error("Python AI service error:", error.message);
    throw new Error("Failed to get insight from AI service");
  }
};
