// routes/chat.js
const express = require("express");
const { getEmbeddingsFromOllama } = require("../utils/embedder");
const { queryVectorStore } = require("../utils/vectorStore");
const { askOllama } = require("../ollama");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { question } = req.body;

    // 1. Embed the user question
    const qEmbedding = await getEmbeddingsFromOllama([question]);

    // 2. Search the vector store for top relevant chunks
    const topChunks = queryVectorStore(qEmbedding[0].embedding, 3);

    // 3. Construct chat prompt using context
    const context = topChunks.map((c) => c.text).join("\n\n");
    const systemPrompt = "Answer based on the PDF content below:\n\n" + context;

    const messages = [
      { role: "system", content: systemPrompt },
      { role: "user", content: question },
    ];

    // 4. Get response from Ollama
    const answer = await askOllama(messages);

    res.json({
      answer,
      citations: topChunks.map((c, i) => ({
        id: i + 1,
        snippet: c.text.slice(0, 100) + "...",
      })),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Chat failed." });
  }
});

module.exports = router;
