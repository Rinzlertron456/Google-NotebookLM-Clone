const express = require("express");
const { getChunks } = require("../utils/chunkPdf");
const { MemoryVectorStore } = require("langchain/vectorstores/memory");
const { OllamaEmbeddings } = require("@langchain/ollama");

const router = express.Router();

let vectorStore = null;

router.post("/", async (req, res) => {
  try {
    const chunks = getChunks();

    if (!chunks.length) {
      return res.status(400).json({
        error: "No PDF content available. Please upload and parse a PDF first.",
      });
    }

    const embeddings = new OllamaEmbeddings({ model: "llama3" });

    const texts = chunks.map((chunk) => chunk.text);
    const metadata = chunks.map((chunk) => ({ page: chunk.page }));

    vectorStore = await MemoryVectorStore.fromTexts(
      texts,
      metadata,
      embeddings
    );

    res.status(200).json({
      message: "Embeddings created successfully.",
      embeddedChunks: chunks.length,
    });
  } catch (err) {
    console.error("Embedding Error:", err.message);
    res.status(500).json({ error: "Failed to embed PDF content." });
  }
});

module.exports = router;
