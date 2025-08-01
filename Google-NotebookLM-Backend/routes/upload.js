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
    console.log(req.file);
    const pdfBuffer = fs.readFileSync(req.file.path);

    const data = await pdfParse(pdfBuffer);
    const fullText = data.text;

    if (!fullText) {
      throw new Error("Parsed PDF contains no text.");
    }

    const chunks = chunkText(fullText);

    const embeddings = await getEmbeddingsFromOllama(chunks);

    saveToVectorStore(embeddings);

    fs.unlinkSync(req.file.path);

    res.json({
      message: "PDF processed and embedded successfully.",
      chunksCount: chunks.length,
    });
  } catch (err) {
    console.error("Upload error:", err);
    res
      .status(500)
      .json({ error: "Failed to process PDF.", details: err.message });
  }
});

module.exports = router;
