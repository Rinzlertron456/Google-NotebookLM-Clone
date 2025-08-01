const express = require("express");
const { getEmbeddingsFromOllama } = require("../utils/embedder");
const { queryVectorStore } = require("../utils/vectorStore");
const { askOllama } = require("../ollama");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { question } = req.body;

    const qEmbedding = await getEmbeddingsFromOllama([question]);

    const topChunks = queryVectorStore(qEmbedding[0].embedding, 3);

    const context = topChunks.map((c) => c.text).join(" ");
    const systemPrompt = "Answer based on the PDF content below:- " + context;

    const messages = [
      { role: "system", content: systemPrompt },
      { role: "user", content: question },
    ];
    const answer = await askOllama(messages);

    res.json({
      answer,
      citations: topChunks.map((c, i) => ({
        id: i + 1,
        snippet: c.text.slice(0, 100) + "...",
      })),
    });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ error: "Chat failed." });
  }
});

module.exports = router;
