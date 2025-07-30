function chunkText(text, maxTokens = 300, overlap = 50) {
  const sentences = text.split(/(?<=[.?!])\s+/);
  const chunks = [];
  let chunk = [];

  for (let i = 0; i < sentences.length; i++) {
    chunk.push(sentences[i]);

    const tokenEstimate = chunk.join(" ").split(" ").length;

    if (tokenEstimate > maxTokens) {
      const chunkText = chunk.join(" ");
      chunks.push(chunkText);
      chunk = chunk.slice(chunk.length - overlap);
    }
  }

  if (chunk.length) {
    chunks.push(chunk.join(" "));
  }

  return chunks;
}

module.exports = { chunkText };
