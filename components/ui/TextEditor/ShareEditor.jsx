"use client";
import { useCallback, useState, useRef, useEffect } from "react";
import { debounce } from "lodash";
import { Editor } from "@tinymce/tinymce-react";

const ShareEditor = ({ data, setData }) => {
  const [isClient, setIsClient] = useState(false);
  const [content, setContent] = useState(data);
  const editorRef = useRef(null);
  const history = useRef([data]);
  const [historyIndex, setHistoryIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  const debouncedUpdate = useCallback(
    debounce((newContent) => {
      setData(newContent);
    }, 300),
    []
  );

  useEffect(() => {
    if (editorRef.current && data !== editorRef.current.getContent()) {
      editorRef.current.setContent(data, { format: "raw" }); // Prevents reinitialization
    }
    updateHistory(data);
  }, [data]);

  const updateHistory = (newContent) => {
    history.current = history.current.slice(0, historyIndex + 1);
    history.current.push(newContent);
    setHistoryIndex(history.current.length - 1);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      const prevState = history.current[historyIndex - 1];
      setContent(prevState);
      if (editorRef.current) {
        editorRef.current.setContent(prevState, { format: "raw" });
      }
      setHistoryIndex(historyIndex - 1);
      setData(prevState);
    }
  };

  const handleEditorChange = (newContent) => {
    if (newContent !== content) {
      setContent(newContent);
      updateHistory(newContent);
      debouncedUpdate(newContent);
    }
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: "100%" }}>
      <Editor
        tinymceScriptSrc="https://cdnjs.cloudflare.com/ajax/libs/tinymce/5.10.7/tinymce.min.js"
        onInit={(evt, editor) => {
          editorRef.current = editor;
          // Ensure cursor stays at the last typed position
          editor.focus();
        }}
        init={{
          height: 200,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar: "undo redo bold italic alignjustify",
          content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
};

export default ShareEditor;
