import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

console.log("ENV CHECK:", {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI ? "✅ FOUND" : "❌ MISSING"
});

export const env = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI
};
