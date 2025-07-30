const axios = require("axios");

async function askOllama(messages) {
  try {
    const res = await axios.post("http://localhost:11434/api/chat", {
      model: "llama3", // Make sure llama3 is downloaded with `ollama run llama3`
      messages,
      stream: false,
    });

    // Safely access response
    if (!res.data || !res.data.message || !res.data.message.content) {
      console.error(
        "⚠️ Unexpected Ollama response:",
        JSON.stringify(res.data, null, 2)
      );
      throw new Error("Ollama did not return valid response");
    }

    return res.data.message.content;
  } catch (error) {
    console.error("❌ Ollama error:", error.message);
    throw new Error("Failed to get response from Ollama");
  }
}

module.exports = { askOllama };
