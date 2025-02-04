import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { MdOutlineFileUpload } from "react-icons/md";

const ImageUpload = ({ name, setFieldValue, width, multiple = true }) => {
  const [files, setFiles] = useState([]);

  // Handle files drop
  const onDrop = (acceptedFiles) => {
    // Generate preview URLs for client-side display
    const filesWithPreview = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );

    // If multiple files are allowed, append new files
    if (multiple) {
      setFiles((prev) => [...prev, ...filesWithPreview]);
      setFieldValue(name, [...prev, ...filesWithPreview]); // Update Formik state with file objects
    } else {
      // If single file upload, replace existing files
      setFiles(filesWithPreview);
      setFieldValue(name, filesWithPreview[0]); // Update Formik state with single file object
    }
  };

  // Configure dropzone
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
      "image/gif": [".gif"],
    },
    multiple, // Allow multiple files based on the `multiple` prop
  });

  // Remove a single file by index
  const removeFile = (index) => {
    setFiles((prev) => {
      const updatedFiles = prev.filter((_, i) => i !== index);
      setFieldValue(name, multiple ? updatedFiles : updatedFiles[0] || null); // Update Formik state
      return updatedFiles;
    });
  };

  // Remove all files
  const removeAllFiles = () => {
    setFiles([]);
    setFieldValue(name, multiple ? [] : null); // Clear Formik state
  };

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        width: width,
      }}
    >
      {/* Dropzone Area */}
      <div
        {...getRootProps()}
        style={{
          borderRadius: "5px",
          padding: "20px",
          cursor: "pointer",
          margin: "20px 0",
          background: "#f9fafb",
        }}
      >
        <input {...getInputProps()} />
        <p>Drag and drop images here, or click to select files</p>
        <MdOutlineFileUpload style={{ height: "3rem", width: "3rem" }} />
      </div>

      {/* Display Previews and File Names */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {files.map((file, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              width: "100px",
              height: "100px",
            }}
          >
            <img
              src={file.preview}
              alt={file.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
            <button
              type="button"
              onClick={() => removeFile(index)}
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
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Remove All Button (only shown if multiple files are allowed) */}
      {multiple && files.length > 0 && (
        <button
          type="button"
          onClick={removeAllFiles}
          style={{
            marginTop: "20px",
            padding: "8px 16px",
            background: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Remove All Files
        </button>
      )}
    </div>
  );
};

export default ImageUpload;