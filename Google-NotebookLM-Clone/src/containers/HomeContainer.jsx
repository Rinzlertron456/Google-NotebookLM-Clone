import React, { useState } from "react";

const HomeContainer = (props) => {
  const handleFile = (e) => {
    const file = e.target.files[0];
    props.handleFileUpload(file);
  };
  return (
    <div style={{ width: "50%", padding: "20px" }}>
      <h3>📄 View PDF</h3>
      <input type="file" accept=".pdf, .txt" onChange={handleFile} />
      <br />
      <br />
    </div>
  );
};

export default HomeContainer;
