import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { MdOutlineFileUpload } from "react-icons/md";

const ImageUpload = ({ name, setFieldValue, width, multiple = true }) => {
  const [files, setFiles] = useState([]);

  // Handle files drop
  const onDrop = (acceptedFiles) => {
    const updatedFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );

    if (multiple) {
      setFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
      setFieldValue(name, [...files, ...acceptedFiles].map(f => {
        const { preview, ...fileWithoutPreview } = f;
        return fileWithoutPreview;
      })); // Only send file data, not preview
    } else {
      setFiles(updatedFiles);
      setFieldValue(name, acceptedFiles[0]); // Send single file without preview
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
      "image/gif": [".gif"],
    },
    multiple, // Allow multiple files only if `multiple` is true
  });

  // Remove single file
  const removeFile = (file) => {
    setFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter((f) => f !== file);
      setFieldValue(name, updatedFiles.map(f => {
        const { preview, ...fileWithoutPreview } = f;
        return fileWithoutPreview;
      })); // Update Formik state without previews
      return updatedFiles;
    });
  };

  // Remove all files
  const removeAllFiles = () => {
    setFiles([]);
    setFieldValue(name, []); // Clear Formik state, no need to handle previews here
  };

  return (
    <div style={{ textAlign: "center", display: "flex", flexDirection: "column", width: width }}>
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
      {multiple && files.length > 0 && (
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