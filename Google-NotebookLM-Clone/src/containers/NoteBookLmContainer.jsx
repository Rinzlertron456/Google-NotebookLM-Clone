import React, { useState } from "react";
import ChatContainer from "./ChatContainer";
import { useSelector } from "react-redux";
import PdfContainer from "./PdfContainer";

const NoteBookLmContainer = () => {
  const { url } = useSelector((state) => state.upload);
  const [selectedPage, setSelectedPage] = useState(null);

  return (
    <div
      className="notebook-lm-container"
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
      }}
    >
      <ChatContainer setSelectedPage={setSelectedPage} />
      <PdfContainer url={url} selectedPage={selectedPage} />
    </div>
  );
};

export default NoteBookLmContainer;
