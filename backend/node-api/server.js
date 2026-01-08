console.log("🚀 server.js loaded");

import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";
import { env } from "./src/config/env.js";

const startServer = async () => {
  console.log("🔌 Connecting to DB...");
  await connectDB();

  console.log("🌐 Starting server...");
  app.listen(env.PORT, () => {
    console.log(`🚀 Server running on port ${env.PORT}`);
  });
};

startServer();
