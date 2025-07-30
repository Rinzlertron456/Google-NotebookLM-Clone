// chunkPdf.js
function chunkText(text, maxTokens = 300, overlap = 50) {
  const sentences = text.split(/(?<=[.?!])\s+/); // split into sentences
  const chunks = [];
  let chunk = [];

  for (let i = 0; i < sentences.length; i++) {
    chunk.push(sentences[i]);

    const tokenEstimate = chunk.join(" ").split(" ").length; // estimate token count by word count

    if (tokenEstimate > maxTokens) {
      const chunkText = chunk.join(" ");
      chunks.push(chunkText);

      // start new chunk with overlap
      chunk = chunk.slice(chunk.length - overlap);
    }
  }

  if (chunk.length) {
    chunks.push(chunk.join(" "));
  }

  return chunks;
}

module.exports = { chunkText };
