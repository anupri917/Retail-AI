import express from "express";
import { createStore, getStores } from "../controllers/store.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createStore);
router.get("/", protect, getStores);

export default router;
