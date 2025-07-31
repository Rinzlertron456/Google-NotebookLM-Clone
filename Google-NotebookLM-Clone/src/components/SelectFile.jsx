import React from "react";

const SelectFile = (props) => {
  return (
    <input
      type="file"
      accept=".pdf"
      style={{ display: "none" }}
      onChange={props.handleFileUpload}
    />
  );
};

export default SelectFile;
