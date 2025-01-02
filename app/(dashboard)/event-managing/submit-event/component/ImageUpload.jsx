import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const ImageUpload = () => {
  const [files, setFiles] = useState([]);

  // Handle files drop
  const onDrop = (acceptedFiles) => {
    const updatedFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  // Remove single file
  const removeFile = (file) => {
    setFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  // Remove all files
  const removeAllFiles = () => {
    setFiles([]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #c11",
          borderRadius: "5px",
          padding: "20px",
          cursor: "pointer",
          margin: "20px 0",
        }}
      >
        <input {...getInputProps()} />
        <p>Drag and drop images here, or click to select files</p>
      </div>
      
      {/* Display Images and Remove Buttons */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {files.map((file, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              src={file.preview}
              alt="preview"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
            <button
              type="button"
              onClick={() => removeFile(file)}
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                cursor: "pointer",
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>

      {/* Remove All Files Button */}
      {files.length > 0 && (
        <button
          onClick={removeAllFiles}
          type="button"
          style={{
            marginTop: "20px",
            backgroundColor: "#c11",
            color: "white",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default ImageUpload;
