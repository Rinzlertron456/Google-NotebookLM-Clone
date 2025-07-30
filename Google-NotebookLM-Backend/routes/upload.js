// routes/upload.js
const express = require("express");
const fs = require("fs");
const pdfParse = require("pdf-parse");
const multer = require("multer");
const { chunkText } = require("../utils/chunkPdf");
const { getEmbeddingsFromOllama } = require("../utils/embedder");
const { saveToVectorStore } = require("../utils/vectorStore");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("pdf"), async (req, res) => {
  try {
    console.log("✅ File uploaded:", req.file);

    const pdfBuffer = fs.readFileSync(req.file.path);
    console.log("✅ PDF buffer read");

    const data = await pdfParse(pdfBuffer);
    console.log("✅ PDF parsed");
    const fullText = data.text;

    if (!fullText || fullText.trim().length === 0) {
      throw new Error("Parsed PDF contains no text.");
    }

    const chunks = chunkText(fullText);
    console.log("✅ Chunks created:", chunks.length);

    const embeddings = await getEmbeddingsFromOllama(chunks);
    console.log("✅ Embeddings generated");

    saveToVectorStore(embeddings);
    console.log("✅ Embeddings saved to vector store");

    fs.unlinkSync(req.file.path); // clean up
    console.log("✅ Uploaded file cleaned up");

    res.json({
      message: "PDF processed and embedded successfully.",
      chunksCount: chunks.length,
    });
  } catch (err) {
    console.error("❌ Error in /upload:", err);
    res
      .status(500)
      .json({ error: "Failed to process PDF.", details: err.message });
  }
});

module.exports = router;
