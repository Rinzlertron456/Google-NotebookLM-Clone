import React, { useState } from "react";
import Modal from "../components/Modal";
import QueryResponse from "../components/QueryResponse";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addQuery } from "../store/queryReducer";
import { addResponse } from "../store/responseReducer";
import Button from "../components/Button";
import ChatLayout from "../layouts/ChatLayout";

const ChatContainer = ({ setSelectedPage }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [lastQuery, setLastQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [hasRespondedOnce, setHasRespondedOnce] = useState(false);
  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
  const handleQuerySize = (e) => {
    const newText = e.target.value;
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
    setText(newText);
  };

  const handleQuerySubmit = async () => {
    const userQuery = text.trim();
    if (!userQuery) return;

    setText("");
    setLastQuery(userQuery);
    dispatch(addQuery(userQuery));
    setResponse("");
    setLoading(true);

    try {
      const result = await axios.post(`${backendUrl}/api/chat`, {
        question: userQuery,
      });
      setResponse(result.data);
      dispatch(addResponse(result.data));
      setHasRespondedOnce(true);
    } catch (err) {
      console.error(err);
      setResponse("Error getting response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="chat-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "50%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: "20px",
      }}
    >
      <ChatLayout
        text={text}
        lastQuery={lastQuery}
        isLoading={isLoading}
        response={response}
        hasRespondedOnce={hasRespondedOnce}
        setSelectedPage={setSelectedPage}
        handleQuerySize={handleQuerySize}
        handleQuerySubmit={handleQuerySubmit}
      />
    </div>
  );
};

export default ChatContainer;
