"use client"; // Ensure the component is client-side

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = ({ value, onChange }) => {
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={{
        toolbar: [
          ["bold", "italic", "underline"], // Basic text formatting
          [{ list: "ordered" }, { list: "bullet" }], // Lists
          ["clean"], // Remove formatting
        ],
      }}
      formats={["bold", "italic", "underline", "list", "bullet"]}
    />
  );
};

export default TextEditor;
