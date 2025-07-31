import React from "react";

const CustomTextBox = (props) => {
  return (
    <>
      {props.type === "query" && (
        <textarea
          placeholder="Ask about the document..."
          value={props.text}
          onChange={props.handleQuerySize}
          style={{
            width: "150%",
            height: "auto",
            overflow: "hidden",
            borderRadius: "10px",
            fontSize: "large",
            fontWeight: "600",
            paddingLeft: "16px",
            resize: "none",
          }}
        />
      )}
      {props.type === "response" && (
        <textarea
          value={
            props.isLoading
              ? "Loading..."
              : props.response?.answer || "Waiting for answer to load..."
          }
          disabled={true}
          style={{
            width: "100%",
            height: "100%",
            padding: "1.2rem 1rem 1rem 4rem",
            fontSize: "large",
            fontWeight: "600",
            borderRadius: "8px",
            backgroundColor: "rgb(220 217 217)",
            color: "#7d30caff",
            overflowY: "auto",
            resize: "none",
          }}
        />
      )}
    </>
  );
};

export default CustomTextBox;
