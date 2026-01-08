import express from "express";
import {
  createStore,
  getStores,
  getStoreById,
  updateStore,
  deleteStore
} from "../controllers/store.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(protect); // All store routes require auth

router.post("/", createStore);
router.get("/", getStores);
router.get("/:id", getStoreById);
router.put("/:id", updateStore);
router.delete("/:id", deleteStore);

export default router;
