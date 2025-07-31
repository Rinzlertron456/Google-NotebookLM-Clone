import React from "react";
import { IoClose } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
const Button = (props) => {
  return (
    <>
      {props.type == "close" && (
        <button
          type="button"
          className="close"
          style={{
            backgroundColor: "whitesmoke",
            position: "relative",
            bottom: "2rem",
            left: "1.5rem",
            fontSize: "1.5rem",
            fontWeight: "700",
            border: "none",
            borderRadius: "2rem",
            width: "5%",
            height: "2.5rem",
            opacity: ".5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }}
          onClick={props.handleUploadModal}
        >
          <IoClose />
        </button>
      )}
      {props.type == "close-query" && (
        <button
          type="button"
          className="close"
          style={{
            backgroundColor: "whitesmoke",
            position: "relative",
            bottom: "0.5rem",
            left: "1.5rem",
            fontSize: "1.5rem",
            fontWeight: "700",
            border: "none",
            borderRadius: "2rem",
            width: "5%",
            height: "2.5rem",
            opacity: ".5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }}
          onClick={props.handleUploadModal}
        >
          <IoClose />
        </button>
      )}
      {props.type === "submit" && (
        <button
          style={{
            borderRadius: "10px",
            width: "10%",
            border: "none",
            backgroundColor: "#7d30caff",
            color: "white",
            fontSize: "x-large",
          }}
          onClick={props.handleQuerySubmit}
        >
          <FiSend />
        </button>
      )}
    </>
  );
};

export default Button;
