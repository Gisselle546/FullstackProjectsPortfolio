require("dotenv").config();
import express from "express";
import cors from "cors";
import { connect_to_db } from "./database/db";
import routes from "./routes";

const app = express();
const PORT: string | number = process.env.PORT || 4000;

app.use(express.json());
app.use(
  cors({
    origin: [
      "https://gisselleapp.vercel.app",
      "http://localhost:5173",
      "https://gisselleworks.netlify.app",
    ],
  }),
);

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
