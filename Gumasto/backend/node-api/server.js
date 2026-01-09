console.log("🚀 server.js loaded");

import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";
import { env } from "./src/config/env.js";
import uploadRoutes from "./src/routes/upload.routes.js";
import cors from "cors";

app.use(cors());
app.use("backend/uploads", uploadRoutes);
const startServer = async () => {
  console.log("🔌 Connecting to DB...");
  await connectDB();

  console.log("🌐 Starting server...");
  app.listen(env.PORT, () => {
    console.log(`🚀 Server running on port ${env.PORT}`);
  });
};

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
}); 

startServer();
