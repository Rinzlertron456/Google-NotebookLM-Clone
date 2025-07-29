import React, { useState } from "react";
import ChatContainer from "./ChatContainer";

const NoteBookLmContainer = (props) => {
  return (
    <div
      className="notebook-lm-container"
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
      }}
    >
      <ChatContainer />

      <div
        style={{
          width: "50%",
          overflow: "hidden",
          // position: "relative",
        }}
      >
        <iframe
          name="pdf-viewer"
          src={props.pdfUrl}
          title="PDF Viewer"
          style={{
            width: "102%",
            height: "102%",
            border: "none",
          }}
        />
      </div>
    </div>
  );
};

export default NoteBookLmContainer;
