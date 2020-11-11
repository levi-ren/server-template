import express from "express";
import cors from "cors";
import api from "./routes/index.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Hello :)");
});

app.use("/api", api);

export default app;
