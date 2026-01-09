import fs from "fs";
import csv from "csv-parser";
import StoreData from "../models/StoreData.model.js";

export const handleCSVUpload = (req, res) => {
  console.log("REQ FILE:", req.file);
  console.log("REQ BODY:", req.body);

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  // If you have CSV parsing logic, comment it for now
  // so we just test upload

  res.json({
    message: "CSV uploaded & stored successfully",
    filename: req.file.filename,
  });
};
