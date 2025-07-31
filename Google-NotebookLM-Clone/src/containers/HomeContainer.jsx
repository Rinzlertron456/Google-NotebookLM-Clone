import { useDispatch } from "react-redux";
import { fileToUrl } from "../utils/fileToUrl";
import SelectFile from "../components/SelectFile";
const HomeContainer = (props) => {
  const dispatch = useDispatch();
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    await fileToUrl({ file, dispatch });
    props.handleUploadStatus(file);
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          padding: "3rem",
          backgroundColor: "white",
          borderRadius: "1rem",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
      >
        <div
          style={{
            width: "4rem",
            height: "4rem",
            backgroundColor: "#f5f3ff",
            borderRadius: "9999px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9333ea"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
        </div>

        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "#1f2937",
              marginBottom: "0.5rem",
            }}
          >
            Upload PDF to start chatting
          </h2>
          <p style={{ color: "#6b7280" }}>
            Click or drag and drop your file here
          </p>
        </div>
        <SelectFile handleFileUpload={handleFileUpload} />
      </label>
    </div>
  );
};

export default HomeContainer;
