// embedder.js
const axios = require("axios");

async function getEmbeddingsFromOllama(textChunks) {
  const embeddings = [];

  for (const chunk of textChunks) {
    const res = await axios.post("http://localhost:11434/api/embeddings", {
      model: "nomic-embed-text",
      prompt: chunk,
    });

    embeddings.push({
      embedding: res.data.embedding,
      text: chunk,
    });
  }

  return embeddings;
}

module.exports = { getEmbeddingsFromOllama };
