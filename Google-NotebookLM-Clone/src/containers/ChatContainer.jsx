import React from "react";
import Modal from "../components/Modal";

const ChatContainer = () => {
  return (
    <div
      className="chat-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "50%",
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: "20px",
      }}
    >
      <Modal />
      <div className="prompt-layout" style={{ display: "flex", gap: "0.5rem" }}>
        <input
          placeholder="Ask about the document..."
          style={{ width: "150%" }}
        />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default ChatContainer;
