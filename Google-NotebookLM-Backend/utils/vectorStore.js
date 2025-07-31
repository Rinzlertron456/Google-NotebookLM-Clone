const cosineSimilarity = (a, b) => {
  const dot = a.reduce((acc, val, i) => acc + val * b[i], 0);
  const magA = Math.sqrt(a.reduce((acc, val) => acc + val * val, 0));
  const magB = Math.sqrt(b.reduce((acc, val) => acc + val * val, 0));
  return dot / (magA * magB);
};

function saveToVectorStore(embeddingObjects) {
  global.vectorStore = embeddingObjects;
}

function queryVectorStore(embedding, topK = 3) {
  if (!global.vectorStore) {
    console.error("Vector store is empty or not initialized.");
    return [];
  }

  const results = global.vectorStore
    .map((chunk) => ({
      ...chunk,
      score: cosineSimilarity(chunk.embedding, embedding),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);

  return results;
}

module.exports = { saveToVectorStore, queryVectorStore };
