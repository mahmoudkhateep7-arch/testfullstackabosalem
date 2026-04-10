import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/gettext", (req, res) => {
  res.json("hi");
});

// Export for Vercel
export default app;