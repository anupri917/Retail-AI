import express from "express";
import cors from "cors";
import morgan from "morgan";
import storeRoutes from "./routes/store.routes.js";
import productRoutes from "./routes/product.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.json({ status: "OK", service: "Node API" });
});

app.use("/api/stores", storeRoutes);
app.use("/api/products", productRoutes);

export default app;
