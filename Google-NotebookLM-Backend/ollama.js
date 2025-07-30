const axios = require("axios");

async function askOllama(messages) {
  try {
    const res = await axios.post("http://localhost:11434/api/chat", {
      model: "llama3",
      messages,
      stream: false,
    });

    if (!res.data || !res.data.message || !res.data.message.content) {
      throw new Error("Ollama did not return valid response");
    }

    return res.data.message.content;
  } catch (error) {
    throw new Error("Failed to get response from Ollama");
  }
}

module.exports = { askOllama };
