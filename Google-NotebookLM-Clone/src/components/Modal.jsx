import React, { useState } from "react";

const Modal = ({ show, onClose }) => {
  const [showModal, setShowModal] = useState(true);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{ position: "relative" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div
                className="modal-header"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h5
                  className="modal-title"
                  style={{ marginBottom: "0", lineHeight: "1.5" }}
                >
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    opacity: ".5",
                  }}
                  onClick={onClose}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      lineHeight: "1",
                      color: "#000",
                      textShadow: "0 1px 0 #fff",
                    }}
                  >
                    x
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
