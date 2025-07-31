import React from "react";
import PdfViewer from "../components/PdfViewer";

const PdfContainer = ({ url, selectedPage }) => {
  return (
    <div style={{ width: "50%", overflow: "hidden" }}>
      <PdfViewer url={url} selectedPage={selectedPage} />
    </div>
  );
};

export default PdfContainer;
