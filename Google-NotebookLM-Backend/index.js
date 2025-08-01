const express = require("express");
const uploadRoutes = require("./routes/upload");
const { router: embedRoutes } = require("./routes/embed");
const chatRoutes = require("./routes/chat");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "https://google-notebook-lm-clone-rouge.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());

app.options("*", cors());
const PORT = process.env.PORT || 5000;

app.use("/api/upload", uploadRoutes);
app.use("/api/embed", embedRoutes);
app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("NotebookLM Clone API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
