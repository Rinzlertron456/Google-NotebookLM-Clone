import React from "react";

const PdfViewer = ({ url, selectedPage }) => {
  return (
    <iframe
      key={selectedPage}
      name="pdf-viewer"
      src={
        selectedPage
          ? `${url}#page=${selectedPage}&toolbar=0&view=fitH`
          : `${url}#toolbar=0&view=fitH`
      }
      title="PDF Viewer"
      style={{
        width: "102%",
        height: "102%",
        border: "none",
      }}
    />
  );
};

export default PdfViewer;
