import React from "react";

const NoteBookLmContainer = () => {
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file).concat("#toolbar=0&view=fitH");
      setPdfUrl(url);
    }
  };
  return (
    <>
      <div
        className="noteboom-lm-container"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <div style={{ width: "50%", padding: "20px" }}>
          <h3>📄 View PDF</h3>
          <input type="file" accept=".pdf, .txt" onChange={handleFile} />
          <br />
          <br />
        </div>
        {pdfUrl && (
          <iframe
            className="pdf-viewer"
            src={pdfUrl}
            width="50%"
            height="1500px"
            title="PDF Viewer"
          />
        )}
      </div>
    </>
  );
};

export default NoteBookLmContainer;
