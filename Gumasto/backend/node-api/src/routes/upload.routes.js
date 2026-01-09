import express from "express";
import { csvUpload } from "../middlewares/csvUpload.js"; // ✅ only one declaration
import { handleCSVUpload } from "../controllers/upload.controller.js";

const router = express.Router();

router.post("/csv", csvUpload.single("file"), handleCSVUpload);

export default router;
