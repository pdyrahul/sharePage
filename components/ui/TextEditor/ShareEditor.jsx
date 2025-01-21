"use client"
import { useCallback, useState, useRef } from 'react';
import { debounce } from 'lodash';
import dynamic from 'next/dynamic';

const JoditEditor = dynamic(() => import('jodit-react'), {
  ssr: false,
});
const ShareEditor = ({ data, setData }) => {
  const [content, setContent] = useState(data);
  const editor = useRef(null);
  const debouncedUpdate = useCallback(
    debounce((newContent) => {
      setData(newContent);
    }, 300),
    [] // Dependencies array
  );

  const handleBlur = (newContent) => {
    setContent(newContent);
    debouncedUpdate(newContent);
  };

  return (
    <div style={{ width: '100%' }}>
      <JoditEditor
        ref={editor}
        value={content}
        onBlur={handleBlur} // Use onBlur for state update
        config={{
          readonly: false,
          height: 150,
          toolbarSticky: false,
          askBeforePasteHTML: false,
          askBeforePasteFromWord: false,
          defaultActionOnPaste: 'insert_as_html',
          buttons: [
            'undo', 'redo', '|',
            'bold', 'italic', 'underline', '|',
            'copy', 'cut', 'paste', '|',
            'align', 'font', 'fontsize',
          ],
          clipboard: {
            matchVisual: true, // Helps in ensuring pasted content matches the editor style
          },
          placeholder: 'Start typing or paste your content here...',
          allowPasteFromWord: true, // Allows pasting from Word or other editors
        }}
      />
    </div>
  );
};

export default ShareEditor;
