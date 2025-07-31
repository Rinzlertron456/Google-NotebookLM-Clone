import React, { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { fileToUrl } from "../utils/fileToUrl";
const Modal = (props) => {
  const showModal = true;
  const dispatch = useDispatch();
  const [uploadPdfModal, setUploadPdfModal] = useState(false);
  const handleUploadModal = () => {
    setUploadPdfModal(!uploadPdfModal);
  };
  const handleNewPdf = async (e) => {
    const file = e.target.files[0];
    await fileToUrl({ file, dispatch });
    setUploadPdfModal(!uploadPdfModal);
  };
  return (
    <>
      {props.type === "intro" && showModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{
            position: "relative",
            height: "16rem",
            borderRadius: "8px",
            overflow: "hidden",
            backgroundColor: "#fff",
            flexBasis: "fit-content",
            border: "none",
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "#efcdfa",
              color: "#632c9aff",
              height: "14rem",
            }}
          >
            <div
              className="modal-header"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "2rem",
                borderBottom: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    fontSize: "xx-large",
                    position: "relative",
                    bottom: "1rem",
                  }}
                >
                  <FaRegFileAlt />
                </div>
                <h5
                  className="modal-title"
                  style={{ position: "relative", bottom: "4px" }}
                >
                  Your Document is ready!
                </h5>
              </div>
              <Button type="close" handleUploadModal={handleUploadModal} />
            </div>
            <div
              className="modal-body"
              style={{
                position: "relative",
                bottom: "2.5rem",
                left: "1rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p>
                You can now ask questions about your document. For example:
                {"\n"}
              </p>
              <ul>
                <li>"What is the main topic of this document?"</li>
                <li>"Can you summarize the key points?"</li>
                <li>"What are the conclusions or recommendations?"</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {props.type === "query" && showModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{
            position: "relative",
            borderRadius: "8px",
            backgroundColor: "#fff",
            width: "100%",
            maxWidth: "60rem",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            height: "fit-content",
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "#85b1ebff",
              color: "#2a39e0ff",
              padding: "1.5rem 2rem",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontSize: "1rem",
                  lineHeight: "1.5",
                }}
              >
                <FiUser style={{ fontSize: "1.5rem", marginTop: "2px" }} />
                <span style={{ fontWeight: "600" }}>{props.query}</span>
              </div>
              <Button
                type="close-query"
                handleUploadModal={handleUploadModal}
              />
            </div>
          </div>
        </div>
      )}

      {uploadPdfModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              padding: "1.5rem",
              maxWidth: "28rem",
              width: "100%",
              margin: "0 1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "#facc15", width: "1.5rem", height: "1.5rem" }}
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                Upload New PDF?
              </h3>
            </div>
            <p style={{ color: "#4b5563", marginBottom: "1.5rem" }}>
              This will end your current chat session. Are you sure you want to
              upload a new PDF?
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "0.75rem",
              }}
            >
              <button
                style={{
                  padding: "0.5rem 1rem",
                  color: "#4b5563",
                  backgroundColor: "transparent",
                  borderRadius: "0.5rem",
                  transition: "background-color 0.2s",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#f3f4f6")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
                onClick={handleUploadModal}
              >
                Cancel
              </button>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#7c3aed",
                  color: "white",
                  borderRadius: "0.5rem",
                  transition: "background-color 0.2s",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#6d28d9")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#7c3aed")}
                onClick={() =>
                  document.getElementById("pdfUploadInput").click()
                }
              >
                <input
                  id="pdfUploadInput"
                  type="file"
                  accept=".pdf"
                  style={{ display: "none" }}
                  onChange={handleNewPdf}
                />
                Upload New PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
