import express from "express";
import { generateInsight } from "../controllers/ai.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Protect this route with JWT
router.post("/insight", protect, generateInsight);

export default router;
