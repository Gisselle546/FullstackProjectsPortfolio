require("dotenv").config();
import express from "express";
import cors from "cors";
import { connect_to_db } from "./database/db";
import routes from "./routes";

const app = express();
const PORT: string | number = process.env.PORT || 4000;

connect_to_db();

app.use(express.json());
app.use(
  cors({
    origin: ["https://gisselleapp.vercel.app", "http://localhost:5173"],
  }),
);
app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log(`Server in ${process.env.NODE_ENV} http://localhost:${PORT}`);
});
