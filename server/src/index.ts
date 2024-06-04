import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import { connect } from "mongoose";
import defaultRoutes from "./routes";
import authRoutes from "./routes/auth";
import express, { Express } from "express";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;
connect(process.env.DB_URL || "");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(defaultRoutes);
app.use(authRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
