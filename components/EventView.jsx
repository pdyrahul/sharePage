"use client"
import React, { useState } from 'react';

const EventView = ({ slug }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  // Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      // Call API to delete the event (API logic to be implemented)
      console.log('Event deleted:', slug);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to submit form data (API logic to be implemented)
    console.log('Form submitted:', formData);
    setIsEditing(false);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Event: {slug}</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="title" style={{ display: 'block', marginBottom: '5px' }}>Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            disabled={!isEditing}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="description" style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            disabled={!isEditing}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', resize: 'none' }}
            rows="4"
          />
        </div>

        {isEditing && (
          <button
            type="submit"
            style={{ padding: '10px 20px', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Submit
          </button>
        )}
      </form>

      <div style={{ marginTop: '20px' }}>
        {!isEditing && (
          <button
            onClick={handleEdit}
            style={{ marginRight: '10px', padding: '10px 20px', backgroundColor: '#2196f3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Edit
          </button>
        )}

        <button
          onClick={handleDelete}
          style={{ padding: '10px 20px', backgroundColor: '#f44336', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EventView;
