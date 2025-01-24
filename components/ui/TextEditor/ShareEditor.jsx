"use client";
import { useCallback, useState, useRef, useEffect } from 'react';
import { debounce } from 'lodash';
import { Editor } from '@tinymce/tinymce-react';

const ShareEditor = ({ data, setData, fetchData }) => {
  // This check will prevent the component from rendering on the server, which is not what we want.
  // Instead, we'll manage server/client differences in a way that allows for proper hydration.
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  const [content, setContent] = useState(data);
  const editorRef = useRef(null);
  const history = useRef([data]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const debouncedUpdate = useCallback(
    debounce((newContent) => {
      setData(newContent);
    }, 300),
    []
  );

  useEffect(() => {
    setContent(data);
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
        editorRef.current.setContent(prevState);
      }
      setHistoryIndex(historyIndex - 1);
      setData(prevState);
    }
  };

  const handleEditorChange = (newContent, editor) => {
    setContent(newContent);
    updateHistory(newContent);
    debouncedUpdate(newContent);
  };

  // Only render the editor if we're on the client side to avoid hydration issues
  if (!isClient) {
    // You might want to show a loading indicator or nothing until hydration is complete
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: '100%' }}>
      <Editor
        tinymceScriptSrc="https://cdnjs.cloudflare.com/ajax/libs/tinymce/5.10.7/tinymce.min.js"
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={data}
        init={{
          height: 200,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo bold italic alignjustify',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
};

export default ShareEditor;