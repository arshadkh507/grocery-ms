// backend/index.ts
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

app.use("/api/auth", authRoutes);

app.listen(3000, () =>
  console.log(`Backend listening at http://localhost:${PORT}`)
);
