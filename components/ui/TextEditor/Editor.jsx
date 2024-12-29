import React from 'react';
import { Editor as TinyMCEEditor } from '@tinymce/tinymce-react';

export function Editor({ initialValue, onEditorChange }) {
  return (
    <TinyMCEEditor
      apiKey="ukhi6pngta7tqtez66uytpmkd111wi54gzuc8d05wljg6pgx" // Get a free API key from https://www.tiny.cloud/
      init={{
        height: 300,
        width: '100%',
        menubar: true,
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
        ],
        toolbar: 'undo redo | blocks | ' +
          'bold italic forecolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
        content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,Karla,Helvetica, Arial, sans-serif; font-size: 14px }'
      }}
      initialValue={initialValue}
      onEditorChange={onEditorChange}
    />
  );
}