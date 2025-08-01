const express = require("express");
const uploadRoutes = require("./routes/upload");
const { router: embedRoutes } = require("./routes/embed");
const chatRoutes = require("./routes/chat");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

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
