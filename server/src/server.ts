require("dotenv").config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { connect_to_db } from "./database/db";
import routes from "./routes";

const app = express();
const PORT: string | number = process.env.PORT || 4000;

app.use(express.json());
app.use(
  cors({
    origin: ["https://gisselleapp.vercel.app", "http://localhost:5173"],
  }),
);

app.get("/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.get("/mongo-health", (_req, res) => {
  const state = mongoose.connection.readyState;

  const labels: Record<number, string> = {
    0: "disconnected",
    1: "connected",
    2: "connecting",
    3: "disconnecting",
  };

  res.status(200).json({
    dbState: state,
    dbStateLabel: labels[state] || "unknown",
  });
});

app.use("/api/v1", routes);

async function start() {
  try {
    await connect_to_db();
    console.log("✅ Mongo connected successfully");

    app.listen(PORT, () => {
      console.log(`✅ Server in ${process.env.NODE_ENV} on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Mongo connection failed:", error);
    process.exit(1);
  }
}

start();
