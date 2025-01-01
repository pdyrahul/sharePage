import React, { useRef } from 'react';
import useImageUpload from '@/hooks/useImageUpload';
import { FaCloudUploadAlt } from 'react-icons/fa';

const ImageUpload = ({ setFieldValue }) => {
  const { handleImageUpload, imagePreview, loading } = useImageUpload();
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImageUpload(file, setFieldValue);
  };

  return (
    <div className="image-upload">
      <div 
        className={`drop-zone ${loading ? 'loading' : ''}`}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => fileInputRef.current.click()}
      >
        {imagePreview ? (
          <img src={imagePreview} alt="Preview" className="preview-image" />
        ) : (
          <div className="upload-prompt">
            <FaCloudUploadAlt size={40} />
            <p>Drag & Drop or Click to Upload Image</p>
            <span>Max size: 5MB</span>
          </div>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => handleImageUpload(e.target.files[0], setFieldValue)}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ImageUpload;