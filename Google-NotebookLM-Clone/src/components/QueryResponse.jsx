import React from "react";
import { LuBot } from "react-icons/lu";
import { useSelector } from "react-redux";
import CustomTextBox from "./CustomTextBox";

const QueryResponse = ({ response, isLoading, setSelectedPage }) => {
  const { url } = useSelector((state) => state.upload);

  const goToPage = (pageNumber) => {
    const viewer = window.frames["pdf-viewer"];
    if (viewer) {
      viewer.location.href = `${url}#page=${pageNumber}&toolbar=0&view=fitH`;
    }
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div style={{ position: "relative", flex: 1 }}>
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            fontSize: "xx-large",
            color: "#7d30caff",
            zIndex: 1,
          }}
        >
          <LuBot />
        </div>
        <CustomTextBox
          type="response"
          isLoading={isLoading}
          response={response}
        />
      </div>
      {response?.citations?.length > 0 && (
        <div style={{ display: "flex", gap: "0.5rem", paddingLeft: "2rem" }}>
          {response.citations.map((cite) => (
            <button
              key={cite.id}
              onClick={() => setSelectedPage(cite.id)}
              style={{
                backgroundColor: "#7d30caff",
                color: "white",
                padding: "0.4rem 0.8rem",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              View Page {cite.id}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default QueryResponse;
