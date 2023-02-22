import React from "react";
import Fab from "@material-ui/core/Fab";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function Modal(props) {
    if (!props.isOpen) {
      return null;
    }
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={props.onClose}>
              &times;
            </span>
            <h2>Importar nuevo libro</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <p style={{ textAlign: "left" }}>Nombre del libro</p>
              <input
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  boxSizing: "border-box",
                }}
                type="text"
                placeholder="actividad"
                id="nameActivity"
                name="nameActivity"
              />
              <p style={{ textAlign: "left" }}>Descripción</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <textarea
                  style={{
                    width: "100%",
                    height: "80px",
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    marginBottom: "10px",
                    resize: "none",
                  }}
                  placeholder="haz una breve descripción"
                  id="descriptionActivity"
                  name="descriptionActivity"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Fab
                    variant="extended"
                    style={{ marginRight: "10px" }}
                  >
                    <CloudUploadIcon />
                    Subir material
                  </Fab>
                  <button
                    style={{
                      backgroundColor: "#2196f3",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "5px",
                      border: "none",
                      cursor: "pointer",
                      width: "auto",
                      transition: "background-color 0.3s",
                    }}
                    onClick={props.onAdd}
                    onMouseEnter={(event) => {
                      event.target.style.backgroundColor = "#1565c0";
                    }}
                    onMouseLeave={(event) => {
                      event.target.style.backgroundColor = "#2196f3";
                    }}
                  >
                    Agregar libro
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal;